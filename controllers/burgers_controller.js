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

module.exports = router;