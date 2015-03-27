'use strict';
myAngularApp.config( [ '$routeProvider', function ( $routeProvider ) {
    $routeProvider.when( '/', {
        templateUrl: '/templates/home.html',
        controller: 'HomeController'
    } ).otherwise( {
        redirectTo: '/'
    } );
} ] );