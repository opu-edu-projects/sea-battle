/**
 * Created by salterok on 11.09.2015.
 */

var logger = require("log4js").getLogger("memoryStorage");
var _ = require("lodash");

var microdb = require("nodejs-microdb");

function createDB(scope) {
    return new microdb({
        "file": "./data/" + scope,     // The filename to save to, or empty for memory only
        "savetime": 1, // In minutes, how often to flush to disk (approx)
                        // Set this to 0 to diable auto-save.
        "datatype": 1,  // Which data-type: 0 = Array-based, 1 = Object-based
        "flushonexit": true,   // Auto-flush when program quits.
                               // I recommend you leave this on.
        "defalutClean": false // Auto-remove incomplete records on sort opertaions.
        // This is useful if your document type isn't consistent.
        // It can also be turned on per-query.
    });
}

var dbs = {};

var Storage = function(scope) {
    this.scope = scope;
    if (!dbs[this.scope])
        dbs[this.scope] = createDB(scope);
};

Storage.prototype.all = function() {
    return _.values(dbs[this.scope].data);
};

Storage.prototype.get = function(key) {
    return dbs[this.scope].data[key];
};

Storage.prototype.getAll = function(keys) {
    var storage = dbs[this.scope].data;
    return _.map(keys, key => storage[key]);
};

Storage.prototype.put = function(key, val) {
    dbs[this.scope].add(val, key);
};

Storage.prototype.find = function(params) {
    return _.findWhere(dbs[this.scope].data, params);
};

Storage.prototype.remove = function(key) {
    delete dbs[this.scope].del(key);
};

module.exports = (site) => {
    return new Storage(site);
};

module.exports.dump = () => {
    return dbs;
};