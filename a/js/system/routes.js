/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


define(['app/app'], function (app) {
    'use strict';
    
    return app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'a/partials/home.html',
            controller: 'HomeController'
        });

        $routeProvider.when('/about', {
            templateUrl: 'a/partials/about.html',
            controller: 'AboutController'
        });
        
        $routeProvider.when('/contact', {
            templateUrl: 'a/partials/contact.html',
            controller: 'ContactController'
        });

        $routeProvider.otherwise({
            redirectTo: '/home'
        });
    }]);
});