const express = require("express");

const router = express.Router();

const burger = require("../model/burger.js");

router.get("/", function(req,res){
  burger.selectAll(function(data){
        let burgersObj = {
            burgers: data
        };
        console.log(burgersObj);
        res.render("index",burgersObj);
  });
 
});

// Export routes for server.js to use
module.exports = router;