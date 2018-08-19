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


// POST
router.post("/api/burgers", function(req, res){
  console.log("test:"+req);
  burger.insertOne(req.body.burger_name, function(result){
    res.json(result);
  });
});

// PUT ROUTE
router.put("/api/burgers/:id", function(req,res){
  burger.update(req.params.id, function(result){
    res.json(result);
  });
});

// Export routes for server.js to use
module.exports = router;