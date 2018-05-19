var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get("/", function(req, res){
    burger.all(function(data){
        var hbsObj = {
            burgers: data
        };
        console.log(hbsObj);
        res.render("index", hbsObj);
    })
});

router.get("/api/all", function(req, res){
    burger.all(function(result){
        res.json(result)
    })
});

router.post("/api/burgers", function(req, res){
    burger.create(req.body.name, function(result){
        res.json(result)
    })
});

router.put("/api/burgers/:id", function(req, res) {
    burger.update(req.params.id, req.body.name, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;