/**
 * Created by salterok on 11.09.2015.
 */

var logger = require("log4js").getLogger("memoryStorage");

var memory = {};

var Storage = function(site) {
    this.site = site;

};

Storage.prototype.get = function(key) {
    return memory[this.buildKey(key)];
};

Storage.prototype.put = function(key, val) {
    memory[this.buildKey(key)] = val;
};

Storage.prototype.find = function() {

};

Storage.prototype.remove = function(key) {
    delete memory[this.buildKey(key)];
};

Storage.prototype.buildKey = function(key) {
    return this.site + ":" + key;
};

module.exports = (site) => {
    return new Storage(site);
};