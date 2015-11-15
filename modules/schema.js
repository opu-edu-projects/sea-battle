/**
 * Created by salterok on 17.09.2015.
 */

var path = require("path");
var fs = require("fs");
var _ = require("lodash");
var filter = require("json-schema-filter");
var Validator = require("jsonschema").Validator;
var logger = require("log4js").getLogger("schema");
var util = require("util");

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
    var fieldKeys = _.keys(schema.properties);
    var requiredFields = _.filter(fieldKeys, key => {
        return !!schema.properties[key].required;
    });
    var filtered = filter(schema, obj);
    _.forEach(requiredFields,
        fieldName => {
            if (!_.has(filtered, fieldName)) {
                var field = schema.properties[fieldName];
                if (_.has(field, "default")) {
                    filtered[fieldName] = field["default"];
                }
                else {
                    var warnMsg = util.format("Schema %s does not contain default value for required field %s",
                        schemaName, fieldName);
                    logger.warn(warnMsg);
                }
            }
        }
    );
    return filtered;
};
