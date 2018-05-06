const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');



const app = express();
const PORT = process.env.PORT || 3000;



const example = {
    one: 'fuck',
    two: 'this',
    three: 'shit'
}



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/api/friends", function (req, res) {

    return res.json(example);
});



app.get("/survey", function(req, res) {
   
   res.sendFile(path.join(__dirname, "app/public/survey.html"));
 });

// app.use(require("./test.js"), function(req, res) {
   
 
//  });

app.get("*", function (req, res) {

    res.sendFile(path.join(__dirname, "app/public/home.html"));
});


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);


});