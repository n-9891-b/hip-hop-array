var express = require('express');
var bodyParser = require('body-parser');
var requestHandler = require('./config/request-handlers.js');
var port = process.env.PORT || 4568;

var app = express();

app.use(bodyParser.json());
// app.use(express.static(__dirname + '/../client/'));

app.use(express.static(__dirname + '/../client'));

app.listen(port, function() {
  console.log('Listening on port ' + port + '!');
  // requestHandler.photoHandler();
});

