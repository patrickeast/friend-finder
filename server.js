const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const friends = require('./app/data/friends.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('app/public'));

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, function() {
    console.log("App listening on port: " + PORT);
});