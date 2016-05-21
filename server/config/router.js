var bodyParser = require('body-parser');
var requestHandler = require('./request-handlers.js');
var multer = require('multer');
var upload = multer({dest: 'uploads/'});

module.exports = function (app) {

  const uploadMiddleware = upload.array('photos');
  app.post('/recipes', requestHandler.photoHandler);
  app.post('/ingredients', uploadMiddleware, function(req, res, next) {
    console.log(req.files);
  });
    
};


