/**
 * Created by admin on 12.09.2015.
 */
'use strict';

/* Controller for rooms */

var games = angular.module('app.games', []);

games.controller('gamesList', ['$scope', 'Room',
    function($scope, Room) {
        $scope.rooms = Room.query();

        $scope.create = function () {
            console.log($scope.game);
        };
    }]);