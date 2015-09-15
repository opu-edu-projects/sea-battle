/**
 * Created by admin on 12.09.2015.
 */
'use strict';

var app = angular.module('app', [
    'ngRoute',

    'roomsController',
    'roomService'
]);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                controller: 'roomsList'
            }).otherwise({
                redirectTo: '/'
            });
    }]);