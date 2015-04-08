'use strict';
// Declare core application module which pulls all the components together
var myAngularApp = angular.module( 'angularUiGridRestangular', [
    'ngRoute',
    'ngGrid',
    'restangular'
] );
myAngularApp.config( [ 'RestangularProvider', function ( RestangularProvider ) {
    RestangularProvider.setBaseUrl( 'http://127.0.0.1:3000' );
    RestangularProvider.setRestangularFields( {
        id: '_id',
        restangularEtag: '_etag'
    } );
    // RestangularProvider.setRequestInterceptor( function ( elem, operation, what ) {
    //     if ( operation === 'put' ) {
    //         elem._id = undefined;
    //         return elem;
    //     }
    //     return elem;
    // } );
    // RestangularProvider.setDefaultHttpFields( {
    //     cache: true
    // } );
    // RestangularProvider.setMethodOverriders( [ "put", "patch" ] );
} ] );
myAngularApp.config( [ '$routeProvider', function ( $routeProvider ) {
    $routeProvider.when( '/', {
        templateUrl: 'views/main.html',
        controller: 'HomeController'
    } ).otherwise( {
        redirectTo: '/'
    } );
} ] );