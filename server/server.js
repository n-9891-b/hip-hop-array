var express = require('express');
var port = process.env.PORT || 4568;

var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/'));
//953d7737a9514c6966e9e3cc603c9455fc1bd3f2

app.listen(port, function(){
  console.log('Listening on port ' + port + '!');
});


