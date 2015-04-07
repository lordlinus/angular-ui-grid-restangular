'use strict';
myAngularApp.controller( 'HomeController', [ '$scope', 'Restangular',

    function ( $scope, Restangular ) {
        $scope.sentiment = {
            1: 'positive',
            2: 'negative',
            3: 'dont know',
            4: 'none'
        };
        var tweets = Restangular.all( 'twitter_historical_stream_copy' );
        $scope.myData = [];
        var fetch = function () {
            tweets.customGET( "" ).then( function ( response ) {
                $scope.myData = response._items;
            } );
        }
        fetch();
        $scope.gridOptions = {
            data: 'myData',
            multiSelect: false,
            enableCellSelection: true,
            enableRowSelection: false,
            enableCellEditOnFocus: true,
            rowHeight: 50,
            // Column definition example
            columnDefs: [ {
                field: 'body',
                displayName: 'Tweet',
                enableCellEdit: false,
                width: '*'
            }, {
                field: 'userScore',
                displayName: 'Sentiment',
                editType: 'dropdown',
                enableCellEdit: true,
                enableCellEditOnFocus: true,
                cellTemplate: '<select ng-class="\'colt\' + col.index" ng-input="COL_FIELD" ng-model="COL_FIELD" ng-options="id as name for (id, name) in sentiment"/>',
                width: '15%'
            } ],
        };
        $scope.$on( 'ngGridEventEndCellEdit', function ( data ) {
            if ( !data.targetScope.row ) {
                data.targetScope.row = [];
            }
            var doc = data.targetScope.row.entity;
            // var rowIndex = data.targetScope.row.rowIndex;
            // console.log( data.targetScope.row );
            // console.log( $scope.myData[ rowIndex ] );
            var docID = doc._id;
            // tweets.post( docID ).then( function ( postData ) {
            //     console.log( postData );
            // } );
            console.log( docID );
            tweets.one( '' ).patch( docID, doc ).then( function () {
                console.log( "Object saved OK" );
            }, function () {
                console.log( "There was an error saving" );
            } );
        } );
    }
] );