/**
 * Created by salterok on 10/18/2015.
 */

"use strict";

var logger = require("log4js").getLogger("api/user");
var util = require("util");
var storage = require("../modules/memoryStorage")("user");
var uuid = require('node-uuid');
var _ = require("lodash");
var schema = require("../modules/schema");

let user = {};

user.index = (scope, cb) => {
    let users = storage.all();
    return cb(null, users);
};

user.setName = (scope, nickname, cb) => {
    let user = scope.user;
    user.nickname = nickname;
    return cb(null, user);
};

module.exports = user;
