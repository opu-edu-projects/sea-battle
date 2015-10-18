/**
 * Created by admin on 04.10.2015.
 */

var createRoom = angular.module('app.authRoom', []);

createRoom.controller('AuthRoomCtrl', ['$scope', 'Room',
    function($scope, Room) {

        $scope.success = function () {
            console.log("success");
        };

        $scope.cancel = function () {
            console.log('cancel');
            $scope.$parent.selectedIndex = undefined;
        };
    }
]);