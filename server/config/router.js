var bodyParser = require('body-parser');
var requestHandler = require('./request-handlers.js');

module.exports = function (app) {
  app.post('/recipes', requestHandler.photoHandler);
  app.post('/ingredients', upload.array('photos', 12), function (req, res) {
    console.log(req);
  });
};


