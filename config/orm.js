var connection =require("../config/connection.js");

let orm ={

    selectAll:function(tableInput, cb){
        let queryString = "SELECT * FROM ??";
        connection.query(queryString,[tableInput], function(err, result){
            if(err) {
                throw err; 
            }
            // cb(result);
            // console.log("from select all func:");
            // console.log(result);
            cb(result);
        });
    },

    // insertOne: function(tableInput,colToSearch,val){
    //     let queryString = "SELECT * FROM ?? WHERE ?? = ?";
    //     connection.query(queryString, [tableInput, colToSearch,val], function(err,result){
    //         if(err) {
    //             throw err;
    //         }
    //         console.log("from insert one");
    //         console.log(result);
    //     });

    // },

    updateOne: function(){

    }
}

// Export orm for model (burger.js)
module.exports = orm;