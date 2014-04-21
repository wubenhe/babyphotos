/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


define(["./module", "jquery", "parse"], function(controllers, $, Parse) {
    'use strict';
    var getCoverImages = function($scope){
        var albums = Parse.Object.extend('albums');
        var pictures = Parse.Object.extend('pictures');
        var innerQuery = new Parse.Query(albums);
        innerQuery.equalTo('name', 'cover');
        var query = new Parse.Query(pictures);

        query.matchesQuery('albums_id', innerQuery);
        query.find({
            success: function(pictures) {
                $scope.images = []; 
                for(var i = 0, l = pictures.length; i < l; i++){
                    $scope.images.push({
                       farm:pictures[i].get('farm'),
                       server:pictures[i].get('server'),
                       picture_id:pictures[i].get('picture_id'),
                       secret:pictures[i].get('secret')
                    });
                }
                $scope.$apply();
            }
        }); 
    }; 
    
    var getAlbumsImages = function($scope){
        var albums = Parse.Object.extend('albums');
        var pictures = Parse.Object.extend('pictures');
        var innerQuery = new Parse.Query(albums);
        innerQuery.equalTo('name', 'baby-shoe');
        var query = new Parse.Query(pictures);

        query.matchesQuery('albums_id', innerQuery);
        query.find({
            success: function(pictures) {
                $scope.albums = []; 
                for(var i = 0, l = pictures.length; i < l; i++){
                    $scope.albums.push({
                       farm:pictures[i].get('farm'),
                       server:pictures[i].get('server'),
                       picture_id:pictures[i].get('picture_id'),
                       secret:pictures[i].get('secret')
                    });
                }
                $scope.$apply();
            }
        });
    };
    
    controllers.controller('HomeController', function($scope) {
        $('[menu-id]').removeClass('active');
        $('[menu-id=home]').addClass('active');
        getCoverImages($scope);
        getAlbumsImages($scope);
    });
});