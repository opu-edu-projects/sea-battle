/**
 * Created by salterok on 11.09.2015.
 */

var logger = require("log4js").getLogger("api/room");
var storage = require("../modules/memoryStorage")("room");
var mdump = require("../modules/memoryStorage").dump;
var uuid = require('node-uuid');
var _ = require("lodash");
var schema = require("../modules/schema");

var room = {};


room.index = cb => {
    logger.debug(mdump());
    var rooms = storage.all();
    return cb(null, rooms);
};

room.create = (room, cb) => {
    var guid = uuid.v1();
    room.id = guid;
    storage.put(guid, room);

    return cb(null, room);
};

room.join = (joinInfo, cb) => {

    cb();
};


module.exports = room;


