/**
 * Created by admin on 12.09.2015.
 */
'use strict';

/* Controller for rooms */

var roomsController = angular.module('roomsController', []);

roomsController.controller('RoomList', ['$scope', 'Room',
    function($scope, Room) {
        $scope.rooms = Room.query();
        console.log($scope.rooms);
    }]);