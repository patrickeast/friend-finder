var userinfoJSON = {};

var express = require("express");
var bodyParser = require("body - parser");
var path = require("path");


var app = express();
var PORT = process.env.PORT || 3000;



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var example = {
    one: "fuck",
    two: "this",
    three: "shit"
}




app.get("/api/friends", function (req, res) {

    return res.json(example);
});



app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

var userinfoJSON = {};

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




app.get("/survey", function(req, res) {
   // res.send("Welcome to the Star Wars Page!")
   res.sendFile(path.join(__dirname, "../public/survey.html"));
 });


app.get("*", function (req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});