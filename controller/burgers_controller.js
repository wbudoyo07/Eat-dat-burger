const express = require("express");

const router = express.Router();

const burger = require("../model/burger.js");

router.get("/", function(req,res){
  
  burger.selectAll(function(data){
      // we need to create obj here so we can use #each method from handlebars.
        let burgersObj = {
            burgers: data
        };
        console.log(burgersObj);
        res.render("index",burgersObj);
  });
 
});

// Export routes for server.js to use
module.exports = router;