var express = require('express');
var router = express.Router();

router.get("/", (req, res) => {
    res.render("index", {title: "Express"});
});

router.get("/:site", (req, res) => {
    var site = req.params["site"] || "index";
    res.render(site);
});

module.exports = router;
