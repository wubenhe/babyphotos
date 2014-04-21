/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


define(['./module', 'masonry', 'jquery'], function(directives, Masonry, $) {
    'use strict';
    var promises = [];
    directives.directive('appMasonryImg', function() {
        return function(scope, elm) {
            var $img = $(elm);
            var p = $.Deferred();
            $img.load(p.resolve);
            $img.error(p.resolve);
            promises.push(p);
            if (scope.$last) {
                $.when.apply(null, promises).done(function() {
                    new Masonry('#masonry-container', {
                        itemSelector: '.item'
                    });
                });
            }
        };
    });

});