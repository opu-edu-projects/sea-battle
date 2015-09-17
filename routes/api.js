/**
 * Created by salterok on 11.09.2015.
 */

var express = require('express');
var logger = require("log4js").getLogger("api$base");
var schema = require("../modules/schema");
var _ = require("lodash");
var router = express.Router();

router.get("/:model", (req, res) => {
    var model = req.params["model"];
    var retSchema = model + "_get";
    var api = require("../api/" + model);
    api.index((err, data) => {
        if (err) {
            return res.status(503).json({ errors: [JSON.stringify(err)] });
        }
        var dto = filter(data, retSchema);
        return res.json(dto);
    });
});

router.get("/:model/:method", (req, res) => {
    var model = req.params["model"];
    var method = req.params["model"];
    var retSchema = model + "_" + method;
    var api = require("../api/" + model);
    if (_.isFunction(api[method])) {
        api[method]((err, data) => {
            if (err) {
                return res.status(503).json({ errors: [JSON.stringify(err)] });
            }
            var dto = filter(data, retSchema);
            return res.json(dto);
        });
    }
    else {
        return res.status(404).end("No method GET: '/api/" + model + "/" + method + "' found");
    }
});

router.post("/:model", (req, res) => {
    var model = req.params["model"];
    var contentSchema = model + "_create";
    var validation = schema.validate(req.body, contentSchema);
    if (validation.errors.length > 0) {
        logger.warn("Invalid object passed to model " + req.params["model"]);
        logger.debug(validation.errors);
        return res.status(503).json({ errors: validation.errors });
    }
    var api = require("../api/" + req.params["model"]);
    api.create(req.body, (err, data) => {
        if (err) {
            return res.status(503).json({ errors: [JSON.stringify(err)] });
        }
        return res.json(data);
    });
});

router.post("/:model/:method", (req, res) => {
    var model = req.params["model"];
    var method = req.params["method"];
    var contentSchema = model + "_" + method;
    var api = require("../api/" + model);
    var validation = schema.validate(req.body, contentSchema);
    if (validation.errors.length > 0) {
        logger.warn("Invalid object passed to model " + req.params["model"]);
        logger.debug(validation.errors);
        return res.status(503).json({ errors: validation.errors });
    }
    if (_.isFunction(api[method])) {
        api[method](req.body, (err, data) => {
            if (err) {
                return res.status(503).json({ errors: [JSON.stringify(err)] });
            }
            return res.json(data);
        });
    }
    else {
        return res.status(404).end("No method GET: '/api/" + model + "/" + method + "' found");
    }
});


function filter(data, schemaName) {
    if (_.isArray(data)) {
        return _.map(data, item => schema.filter(item, schemaName));
    }
    else {
        return schema.filter(data, schemaName);
    }
}

module.exports = router;
