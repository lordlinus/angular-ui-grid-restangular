'use strict';
myAngularApp.controller( 'HomeController', [ '$scope', 'Restangular',
    function ( $scope, Restangular ) {
        $scope.data = {};
        $scope.message = "";
        $scope.count = 0;
        $scope.sentiment = "";
        $scope.tweet = "";
        var tweets = Restangular.all( 'twitter_stream' );
        var query = {
            'where': {
                'sentiment': {
                    '\$exists': 'false'
                }
            }
        };
        var query_string = JSON.stringify( query );
        var fetch = function () {
            // console.log( "fetch fired" );
            tweets.customGET( "?max_results=11&where={\"sentiment\":{\"\$exists\":false}}" ).then( function ( response ) {
                $scope.data = response;
                var rand = Math.floor( ( Math.random() * 10 ) + 1 );
                $scope.tweet = $scope.data._items[ rand ];
            } );
        };
        fetch();
        $scope.submit = function ( data ) {
            // console.log( "submit clicked" );
            // console.log( $scope.tweet );
            var doc = $scope.tweet;
            doc.restangularEtag = doc._etag;
            doc.sentiment = $scope.sentiment;
            console.log( doc );
            tweets.one( doc._id ).patch( _.pick( doc, 'sentiment', 'restangularEtag' ) ).then( function () {
                // console.log( "PATCH Object saved OK" );
                fetch();
                $scope.sentiment = "";
                $scope.count++;
                if ( $scope.count > 5 ) {
                    $scope.message = " You are doing great....!";
                }
            }, function () {
                // console.log( "There was an error saving via PATCH" );
            } );
        };
        /** using ng-grid to display data **/
        // $scope.myExternalScope = $scope;
        // var grid;
        //         $scope.sentiments = [
        //     {
        //         id: 1,
        //         type: 'positive'
        //         },
        //     {
        //         id: 2,
        //         type: 'negative'
        //         },
        //     {
        //         id: 3,
        //         type: 'Dont Know'
        //         },
        //     {
        //         id: 4,
        //         type: 'None'
        //         }
        // ];
        // var cellEdited = function ( dat ) {
        //     consol.log( dat );
        // }
        // $scope.UpdatePrimary = function ( contact ) {
        //     console.log( "updated" )
        // }
        // $scope.submit = function () {
        //     console.log( "Submit the form" );
        // }
        // $scope.gridOptions = {
        //     data: 'myData',
        //     multiSelect: false,
        //     enableCellSelection: true,
        //     enableRowSelection: false,
        //     enableCellEditOnFocus: true,
        //     rowHeight: 50,
        //     // Column definition example
        //     columnDefs: [ {
        //         field: 'body',
        //         displayName: 'Tweet',
        //         enableCellEdit: false,
        //         width: '*'
        //     }, {
        //         field: 'userScore',
        //         displayName: 'Sentiment',
        //         editType: 'dropdown',
        //         editableCellTemplate: 'views/sentiment.html',
        //         // editableCellTemplate: '<div class="ngSelectionCell"><input ng-model="sentiments" type="radio"></div>',
        //         width: '15%'
        // } ],
        //     onRegisterApi: function ( gridApi ) {
        //         grid = gridApi.grid;
        //         console.log();
        //         gridApi.edit.on.afterCellEdit( $scope, function ( rowEntity, colDef, newValue, oldValue ) {
        //             console.log( rowEntity + ' ' + colDef + ' ' + newValue + ' ' + oldValue )
        //         } );
        //     }
        // };
        // $scope.$on( 'ngGridEventEndCellEdit', function ( data ) {
        //     if ( !data.targetScope.row ) {
        //         data.targetScope.row = [];
        //     }
        //     var doc = data.targetScope.row.entity;
        //     var docID = doc._id;
        //     console.log( doc.userScore );
        //     console.log( $scope.selectedSentiment );
        //     doc.userScore = parseInt( doc.userScore, 10 );
        //     doc.restangularEtag = doc._etag;
        //     tweets.one( docID ).patch( _.pick( doc, 'userScore', 'restangularEtag' ) ).then( function () {
        //         console.log( "PATCH Object saved OK" );
        //     }, function () {
        //         console.log( "There was an error saving via PATCH" );
        //     } );
        // } );
        /** end of angular ui-grid stuuf **/
} ] );