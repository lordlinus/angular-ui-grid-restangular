'use strict';
myAngularApp.factory( 'GridService', [ '$http', '$q',
        function ( $http, $q ) {
        var contributorsFile = 'json/contributors.json';
        var contributors = [];

        function getContributors() {
            var deferred = $q.defer();
            $http.get( contributorsFile ).then( function ( result ) {
                contributors = result.data;
                deferred.resolve( contributors );
            }, function ( error ) {
                deferred.reject( error );
            } );
            return deferred.promise;
        }
        return {
            getContributors: getContributors
        };
        }
    ] );
myAngularApp.factory( 'APIService', [ '$http', '$q',

    function ( $http, $q ) {
        var apiURL = 'http://127.0.0.1:5000';

        function getTweets() {
            var t = 'test'
        }
    }






    ] );