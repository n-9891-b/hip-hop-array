var express = require('express');
<<<<<<< HEAD
var bodyParser = require('body-parser');
=======
var requestHandler = require('./config/request-handlers.js');
>>>>>>> [chore] console.log to server.js, update request handler requests and router with dummy info
var port = process.env.PORT || 4568;

var app = express();

<<<<<<< HEAD
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/'));
//953d7737a9514c6966e9e3cc603c9455fc1bd3f2
=======
app.use(express.static(__dirname + '/../client'));
>>>>>>> [chore] add api calls and fix server issues

app.listen(port, function() {
  console.log('Listening on port ' + port + '!');
  // requestHandler.photoHandler();
});

