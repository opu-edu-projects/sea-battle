/**
 * Created by salterok on 17.09.2015.
 */

var path = require("path");
var fs = require("fs");
var _ = require("lodash");
var filter = require("json-schema-filter");
var Validator = require("jsonschema").Validator;


var schemasDir = path.normalize(path.join(__dirname, "../schemas"));
var files = fs.readdirSync(schemasDir);
var validator = new Validator();

_.forEach(files, file => {
    if (path.extname(file).toLowerCase() == ".json") {
        validator.addSchema(require(path.join(schemasDir, file)));
    }
});

exports.validate = (obj, schemaName) => {
    var schema = validator.schemas[schemaName];
    return validator.validate(obj, schema);
};

exports.filter = (obj, schemaName) => {
    var schema = validator.schemas[schemaName];
    return filter(schema, obj);
};
