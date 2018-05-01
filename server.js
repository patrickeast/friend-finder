const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Set up Express App
const app = express();
const PORT = process.env.PORT || 3000;

// Handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Start the server to begin listening
app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
});
