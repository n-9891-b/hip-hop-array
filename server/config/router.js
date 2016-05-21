var bodyParser = require('body-parser');
var requestHandler = require('./request-handlers.js');
var multer = require('multer');
var upload = multer({dest: 'uploads/'});

module.exports = function (app) {
  app.post('/recipes', requestHandler.photoHandler);
  app.post('/ingredients', upload.array('photos', 12), function (req, res) {
    console.log(req);
  });
};


