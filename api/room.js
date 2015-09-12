/**
 * Created by salterok on 11.09.2015.
 */

var logger = require("log4js").getLogger("api/room");
var storage = require("../modules/memoryStorage")("room");
var mdump = require("../modules/memoryStorage").dump;
var uuid = require('node-uuid');
var _ = require("lodash");

var room = {};


room.index = cb => {
    logger.debug(mdump());
    var rooms = storage.all();
    var cleanRooms = _.chain(rooms).map(room => _.omit(room, "password")).values();

    return cb(null, cleanRooms);
};

room.create = (room, cb) => {
    var guid = uuid.v1();
    room.id = guid;
    storage.put(guid, room);

    return cb(null, room);
};


module.exports = room;


