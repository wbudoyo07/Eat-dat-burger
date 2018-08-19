const orm = require ("../config/orm.js");

let burger = {
    selectAll: function(cb){
        // call the table "burgers"
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },

    insertOne: function(burgerName, cb){
        orm.insertOne("burgers", burgerName,function(res){
            cb(res);
        });
    },
   

    update:  function(id,cb){
        orm.updateOne("burgers",id, function(res){
            cb(res);
        });
    }
  
};

// Export the database functions for the controller ( burgers_controller.js)
module.exports = burger;