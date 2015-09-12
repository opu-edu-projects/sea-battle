/**
 * Created by salterok on 11.09.2015.
 */

var logger = require("log4js").getLogger("api/room");
var storage = require("../modules/memoryStorage")("room");
var uuid = require('node-uuid');

var room = {};


room.index = cb => {
    var rooms = storage.all();

    return cb(null, rooms);
};

room.create = (room, cb) => {
    var guid = uuid.v1();
    room.id = guid;
    storage.put(guid, room);

    return cb(null, room);
};


module.exports = room;


