'use strict';
// Declare core application module which pulls all the components together
var myAngularApp = angular.module( 'angularUiGridRestangular', [
    'ngRoute',
    'ngGrid',
    'restangular'
] );
myAngularApp.config( [ 'RestangularProvider', function ( RestangularProvider ) {
    RestangularProvider.setBaseUrl( 'http://127.0.0.1:5000' );
    RestangularProvider.setRestangularFields( {
        id: '_id'
    } );
} ] );
myAngularApp.config( [ '$routeProvider', function ( $routeProvider ) {
    $routeProvider.when( '/', {
        templateUrl: 'views/main.html',
        controller: 'HomeController'
    } ).otherwise( {
        redirectTo: '/'
    } );
} ] );
