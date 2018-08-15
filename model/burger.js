const orm = require ("../config/orm.js");

let burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    }
};

// Export the database functions for the controller ( burgers_controller.js)
module.exports = burger;