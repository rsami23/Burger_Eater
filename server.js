// REQUIRED DEPENDENCIES
var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

// REQUIRE HANDLEBARS
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// IMPORT ROUTES
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(PORT, function() {
    console.log("APP now listening at localhost: " + PORT);
});

