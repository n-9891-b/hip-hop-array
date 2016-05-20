var bodyParser = require('body-parser');
var requestHandler = require('./request-handlers.js');

module.exports = function (app) {
  app.post('/recipes', requestHandler.photoHandler);
};


