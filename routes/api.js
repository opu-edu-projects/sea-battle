/**
 * Created by salterok on 11.09.2015.
 */

var express = require('express');
var router = express.Router();

router.get("/:model", (req, res, next) => {
    "use strict";

    var api = require("../api/" + req.params["model"]);
    api.index((err, data) => {
        if (err) {
            return res.status(503).json({ error: JSON.stringify(err) });
        }
        return res.json(data);
    });
});

module.exports = router;
