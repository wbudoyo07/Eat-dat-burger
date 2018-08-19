var connection =require("../config/connection.js");

let orm ={

    selectAll:function(tableInput, cb){
        let queryString = `SELECT * FROM ${tableInput}`;
        connection.query(queryString, function(err, result){
            if(err) {
                throw err; 
            }
            // cb(result);
            // console.log("from select all func:");
            // console.log(result);
            cb(result);
        });
    },


    insertOne: function(tableInput,burgerName, cb){
        let queryString = `INSERT INTO ${tableInput}(burger_name, devoured) VALUES ("${burgerName}", false)`;
        connection.query(queryString, function(err, result){
            if(err){
                throw err;
            }
            cb(result);
        });
    },

    updateOne: function(tableInput,id, cb){
        let queryString =`UPDATE ${tableInput} SET devoured = true WHERE id = ${id}`;
        connection.query(queryString, function(err,result){
            if (err){
                throw err;
            }
            cb(result);
        });
    }
}

// Export orm for model (burger.js)
module.exports = orm;