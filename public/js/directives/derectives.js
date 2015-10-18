/**
 * Created by admin on 17.09.2015.
 */
'use strict';

angular.module('app.directives', []).
    directive('smoothScrollOnClick', function() {
        console.log('smoothScrollOnClick');
        return {
            restrict: 'A',
            link: function(scope, $elm) {
                $elm.on('click', function() {
                    var $anchor = $(this);
                    var name = $anchor.attr('href').substr(1);
                    $('html, body').stop().animate({
                        scrollTop: $('a[name="' + name + '"]').offset().top
                    }, 600, 'swing');
                    event.preventDefault();
                });
            }
        }
    }).
    directive("def", function ($compile) {
        return {
            restrict: 'EA',
            link:function($scope, element, attrs) {
                attrs.$observe('selected', function(value) {
                    var authRoom = element.find('.auth-room');
                    var tr = element.find('.auth-room').parent();
                    var room = $scope.rooms[value];
                    authRoom.remove();
                    tr.children().show();

                    if (room) {
                        var selector = room.isPrivate ? 'private-auth-tpl' : 'auth-tpl';
                        var tpl = document.getElementById(selector).innerHTML;
                        var angularElement = angular.element(tpl);
                        var compiled = $compile(angularElement);

                        tr = element.find('[data-index=' + value + ']');
                        tr.children().hide();
                        tr.append(angularElement);
                        compiled($scope);
                    }
                });
            }
        }
    });