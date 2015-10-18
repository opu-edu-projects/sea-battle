/**
 * Created by admin on 04.10.2015.
 */

var createRoom = angular.module('app.createRoom', []);

createRoom.controller('CreateRoomCtrl', ['$scope', 'Room',
    function($scope, Room) {
        $scope.create = function (form) {
            if (form.$valid) {
                var data = angular.copy($scope.room);
                if (data.password) {
                    data.isPrivate = true;
                }
                var newRoom = new Room(data);
                newRoom.$save();
            }
        };
    }
]);