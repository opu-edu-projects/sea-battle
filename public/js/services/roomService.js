/**
 * Created by admin on 12.09.2015.
 */
'use strict';

/* Service for rooms */

var roomService = angular.module('roomService', ['ngResource']);

roomService.factory('Room', ['$resource',
    function($resource){
        return $resource('api/room', {}, {
            query: {method:'GET', isArray:true}
        });
    }]);