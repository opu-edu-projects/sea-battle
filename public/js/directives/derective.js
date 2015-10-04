/**
 * Created by admin on 17.09.2015.
 */
'use strict';

angular.module('app.directive', []).
    directive('smoothScrollOnClick', function() {
        return {
            restrict: 'A',
            link: function(scope, $elm) {
                $elm.on('click', function() {
                    var $anchor = $(this);
                    var name = $anchor.attr('href').substr(1);
                    console.log($('a[name="' + name + '"]').length);
                    $('html, body').stop().animate({
                        scrollTop: $('a[name="' + name + '"]').offset().top
                    }, 600, 'swing');
                    event.preventDefault();
                });
            }
        }
    });