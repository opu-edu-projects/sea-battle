/**
 * Created by admin on 12.09.2015.
 */
'use strict';

/* Service for rooms */

var authService = angular.module('app.authService', ['ngResource']);

authService.factory('Auth', ['$resource',
    function($resource){
        var auth = $resource('api/room/join', null, {
            'auth': {method: 'POST'}
        });
        return auth;
    }]);