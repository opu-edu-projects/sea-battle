/**
 * Created by salterok on 11.09.2015.
 */

var express = require('express');
var logger = require("log4js").getLogger("api$base");
var validate = require("jsonschema").validate;
var router = express.Router();

router.get("/:model", (req, res) => {
    var api = require("../api/" + req.params["model"]);
    api.index((err, data) => {
        if (err) {
            return res.status(503).json({ errors: [JSON.stringify(err)] });
        }
        return res.json(data);
    });
});

router.post("/:model", (req, res) => {
    var result = validate(req.body, require("../schemas/" + req.params["model"] + "_Create.json"));
    if (result.errors.length > 0) {
        logger.warn("Invalid object passed to create " + req.params["model"]);
        logger.debug(result.errors);
        res.status(503).json({ errors: result.errors });
    }
    var api = require("../api/" + req.params["model"]);
    api.create(req.body, (err, data) => {
        if (err) {
            return res.status(503).json({ errors: [JSON.stringify(err)] });
        }
        return res.json(data);
    });
});

module.exports = router;
