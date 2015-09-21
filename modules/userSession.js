/**
 * Created by salterok on 18.09.2015.
 */


var storage = require("./memoryStorage")("users");
var uuid = require("node-uuid");
const SESSION_COOKIE_NAME = "SESSION";

module.exports = function(req, res, next) {
    var session = req.cookies[SESSION_COOKIE_NAME];
    var user;
    if (session) {
        user = storage.get(session);
    }
    if (!user) { // create new
        var guid = uuid.v1();
        user = {
            id: guid
        };
        storage.put(guid, user);
    }
    req.user = user;
    res.cookie(SESSION_COOKIE_NAME, user.id, { httpOnly: true });
    return next();
};