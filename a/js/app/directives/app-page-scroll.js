/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


define(['./module', "onepage-scroll"], function(directives) {
    'use strict';
    directives.directive('appPageScroll', function() {
        return function(scope, elm) {
           if (scope.$last) {
                var $elm = $(elm).parent();
                $elm.height($(document).height());
                $elm.onepage_scroll({
                    loop: true,
                    responsiveFallback: 600,
                    beforeMove: function(index) {
                        var $next_el = $('.main section:eq(' + index + ')');
                        var $input = $next_el.find('input');
                        if ($input.length > 0) {
                            var $image = $('<img />', {'src': $input.val(), 'class':'cover'});
                            $next_el.append($image);
                            $input.remove();
                        }

                    }
                });
                $elm.moveDown();

            }
        };
    });
});