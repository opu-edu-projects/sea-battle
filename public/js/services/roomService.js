/**
 * Created by admin on 12.09.2015.
 */
'use strict';

/* Service for rooms */

var roomService = angular.module('app.roomService', ['ngResource']);

roomService.factory('Room', ['$resource',
    function($resource){
        var room = $resource('api/room/:roomId', {roomId:'@id'}, {
            'save':   {method:'POST'},
            'query':  {method:'GET', isArray:true}
        });
        return room;
    }]);