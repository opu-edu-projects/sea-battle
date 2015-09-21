/**
 * Created by salterok on 11.09.2015.
 */

var logger = require("log4js").getLogger("api/room");
var util = require("util");
var storage = require("../modules/memoryStorage")("room");
var uuid = require('node-uuid');
var _ = require("lodash");
var schema = require("../modules/schema");

var room = {};


room.index = (scope, cb) => {
    var rooms = storage.all();
    return cb(null, rooms);
};

room.create = (scope, roomInfo, cb) => {
    var guid = uuid.v1();
    var room = schema.filter(roomInfo, "room");
    room.id = guid;
    scope.user.nickname = roomInfo.nickname;
    room.players = [scope.user.id];

    storage.put(guid, room);
    return cb(null, room);
};

room.join = (scope, joinInfo, cb) => {
    var room = storage.get(joinInfo.roomId);
    if (!room) {
        return cb(util.format("Room %s is not found", joinInfo.roomId));
    }
    if (room.isFull) {
        var errMsg = util.format("Room %s is already full", joinInfo.roomId);
        return cb(errMsg);
    }

    scope.user.nickname = joinInfo.nickname;
    room.players.push(scope.user.id);
    room.isFull = true;
    return cb(null, room);
};


module.exports = room;


