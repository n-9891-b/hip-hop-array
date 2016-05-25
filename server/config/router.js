var bodyParser = require('body-parser');
var requestHandler = require('./request-handlers.js');
var multer = require('multer');
var crypto = require('crypto')

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function(req, file, cb) {
    crypto.pseudoRandomBytes(16, function (err, raw) {
      cb(null, raw.toString('hex') + Date.now() + '.' + file.mimetype.slice(6));
    });
  }
});

var upload = multer({storage: storage});

module.exports = function (app) {
  var uploadMiddleware = upload.array('photos');
  
  // app.post('/recipes', requestHandler.photoHandler);
  app.post('/ingredients', uploadMiddleware, requestHandler.photoHandler);  
};


