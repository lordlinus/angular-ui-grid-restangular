'use strict';
// Declare core application module which pulls all the components together
var myAngularApp = angular.module( 'angularGruntSeed', [
    'ngAnimate',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngGrid',
    'restangular'
] );
myAngularApp.config( [ "RestangularProvider", function ( RestangularProvider ) {
    RestangularProvider.setBaseUrl( 'http://127.0.0.1:5000' );
    RestangularProvider.setRestangularFields( {
        id: "_id"
    } );
} ] );