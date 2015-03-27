'use strict';
myAngularApp.controller( 'HomeController', [ '$scope', 'GridService', 'Restangular',

    function ( $scope, gridService, Restangular ) {
    $scope.sentiment = [ {
            ID: 1,
            type: 'positive'
        }, {
            ID: 2,
            type: 'negative'
        }, {
            ID: 3,
            type: 'dont know'
        }, {
            ID: 4,
            type: 'none'
        }, ];
        var resource = Restangular.all( 'twitter_historical_stream_copy' ).customGET( "" ).then( function ( data ) {
            $scope.myData = data._items;
            console.log( $scope.myData );
        } );
        $scope.gridOptions = {
            data: 'myData',
            // multiSelect: true,
            // Column definition example
            columnDefs: [ {
                field: '_id',
                cellTemplate: '<div ng-class="{green: row.getProperty(col.field) > 1}"><div class="ngCellText">{{row.getProperty(col.field)}}</div></div>'
            }, {
                field: 'body',
                displayName: 'Tweet'
            }, {
                field: 'postedTime',
                displayName: 'posted time'
            }, {
                field: 'userScore',
                editType: 'dropdown',
                enableCellEdit: true,
                displayName: 'tweet sentiment',
                editDropdownOptionsArray: $scope.sentiment,
                editDropdownIdLabel: 'type',
                editDropdownValueLabel: 'type',
                editableCellTemplate: 'templates/sentiment_edit.html'
            }, {
                name: 'gender',
                displayName: 'Gender',
                editType: 'dropdown',
                width: '20%',
                editDropdownValueLabel: 'gender',
                editDropdownOptionsArray: [
                    {
                        id: 1,
                        gender: 'male'
                    },
                    {
                        id: 2,
                        gender: 'female'
                    }
        ]
            } ],
            rowTemplate: '<div style="height: 100%" ng-class="{green: row.getProperty(\'id\') > 2 }"><div ng-style="{ \'cursor\': row.cursor }" ng-repeat="col in renderedColumns" ng-class="col.colIndex()" class="ngCell ">' + '<div class="ngVerticalBar" ng-style="{height: rowHeight}" ng-class="{ ngVerticalBarVisible: !$last }"> </div>' + '<div ng-cell></div>' + '</div></div>'
        };
        $scope.$on( 'ngGridEventEndCellEdit', function ( evt ) {
            // Detect changes and send entity to REST server
            // gridService.saveContributor( evt.targetScope.row.entity );
            console.log( evt );
        } );
    }
] );