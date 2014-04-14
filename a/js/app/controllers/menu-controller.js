/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


define(["./module","tmpl"], function(controllers, handlebars){
    'use strict';
    
    controllers.controller('MenuController', function($scope, $sce, $location){
        
        $scope.snippet = $sce.trustAsHtml(handlebars.header());
    });
});