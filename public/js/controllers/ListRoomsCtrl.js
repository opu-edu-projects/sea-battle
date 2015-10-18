/**
 * Created by admin on 12.09.2015.
 */
'use strict';

/* Controller for create room */
var listRooms = angular.module('app.listRooms', []);

listRooms.controller('ListRoomsCtrl', ['$scope', '$modal', 'Room',
    function($scope, $modal, Room) {
        $scope.rooms = Room.query();
        $scope.selectedIndex = undefined;

        $scope.onClick = function (index) {
            $scope.selectedIndex = index;
        };
    }
]);