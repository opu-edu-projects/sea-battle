/**
 * Created by salterok on 11.09.2015.
 */

var logger = require("log4js").getLogger("memoryStorage");
var _ = require("lodash");

var memory = {};

var Storage = function(site) {
    this.site = site;
    memory[this.site] = {};
};


Storage.prototype.all = function() {
    return _.values(memory[this.site]);
};

Storage.prototype.get = function(key) {
    return memory[this.site][key];
};

Storage.prototype.put = function(key, val) {
    memory[this.site][key] = val;
};

Storage.prototype.find = function(params) {
    return _.findWhere(memory[this.site], params);
};

Storage.prototype.remove = function(key) {
    delete memory[this.site][key];
};

module.exports = (site) => {
    return new Storage(site);
};

module.exports.dump = () => {
    return memory;
};