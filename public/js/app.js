/**
 * Created by admin on 12.09.2015.
 */
'use strict';

var app = angular.module('app', [
    'ngRoute',
    'app.directive',
    'app.games',
    'roomService'
]);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                controller: 'gamesList'
            }).otherwise({
                redirectTo: '/'
            });
    }]);