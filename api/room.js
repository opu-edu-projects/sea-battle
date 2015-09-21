/**
 * Created by salterok on 11.09.2015.
 */

var logger = require("log4js").getLogger("api/room");
var storage = require("../modules/memoryStorage")("room");
var uuid = require('node-uuid');
var _ = require("lodash");
var schema = require("../modules/schema");

var room = {};


room.index = cb => {
    var rooms = storage.all();
    return cb(null, rooms);
};

room.create = (roomInfo, cb) => {
    var guid = uuid.v1();
    var room = schema.filter(roomInfo, "room");
    room.id = guid;
    room.players = [roomInfo.nickname];

    storage.put(guid, room);
    return cb(null, room);
};

room.join = (joinInfo, cb) => {
    var room = storage.get(joinInfo.id);
    if (room.isFull) {
        var errMsg = util.format("Room %s is already full", joinInfo.id);
        return cb(errMsg);
    }
    // todo: add player to room

    cb();
};


module.exports = room;


