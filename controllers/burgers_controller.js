var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", (req,res)=>{
    burger.all(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req,res){
    console.log(req.body)
    burger.create("burger_name", req.body.burgerName, function(result){
        console.log(result);
        res.json({ id: result.insertId });
    });
});

module.exports = router;