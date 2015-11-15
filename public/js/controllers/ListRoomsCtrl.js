/**
 * Created by admin on 12.09.2015.
 */
'use strict';

/* Controller for create room */
var listRooms = angular.module('app.listRooms', []);

listRooms.controller('ListRoomsCtrl', ['$scope', '$modal', 'Room',
    function($scope, $modal, Room) {
        $scope.rooms = [];
        Room.query().$promise.then(function (rooms) {
            var ids = new Set();
            rooms.forEach(function (item) {
                ids.add(item.id);
                item.nickname = "Nickname";
            });
            $scope.rooms = rooms;
        });
        $scope.selectedId = undefined;

        $scope.onClick = function (id) {
            $scope.selectedId = id;
        };
    }
]);