/**
 * Created by admin on 12.09.2015.
 */
'use strict';

var app = angular.module('app', [
    'ngRoute',
    'ui.bootstrap',
    'app.directives',
    'app.listRooms',
    'app.authRoom',
    'app.createRoom',
    'app.roomService'
]);

app.config(['$routeProvider',
    function($routeProvider) {
        console.log("run app");
        $routeProvider.
            when('/', {
                controller: 'ListRoomsCtrl'
            }).otherwise({
                redirectTo: '/'
            });
    }
]);