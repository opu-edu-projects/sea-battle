/**
 * Created by admin on 04.10.2015.
 */

var createRoom = angular.module('app.authRoom', []);

createRoom.controller('AuthRoomCtrl', ['$scope', 'Auth',
    function($scope, Auth) {

        $scope.success = function () {
            var data = angular.copy($scope.auth);
            data.roomId = $scope.$parent.selectedId;
            var auth = new Auth(data);
            auth.$auth();
        };

        $scope.cancel = function () {
            $scope.$parent.selectedId = undefined;
        };
    }
]);