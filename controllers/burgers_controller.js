// REQUIRED DEPENDENCIES
var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    console.log(req);
    burger.insertOne(req.body.burger_name, function(data) {
        console.log(data);
        res.redirect("/");
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    burger.updateOne({
        devoured: true
    }, condition, function(data) {
        res.redirect("/");
    });
});

module.exports = router;