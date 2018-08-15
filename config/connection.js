// Set up MYSQL Connection.
const mysql = require("mysql");

let connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password:"root",
    database:"burgers_db"
});

// Make connection
connection.connect(function(err){
    if(err){
        console.error("error connection: " +err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use
module.exports = connection;