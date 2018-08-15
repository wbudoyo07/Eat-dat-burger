// Dependecies
const express = require("express");
const bodyParser = require("body-parser");
let app = express();

const PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// set Handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//routes
// app.get("/", function(req,res){
//     res.render("index",);
// });

// Import routes and give the server access to them.
const routes = require("./controller/burgers_controller.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});

// const orm = require ("./config/orm");

// orm.selectAll("burgers");
// orm.insertOne("burgers", "burger_name","Hamburger");