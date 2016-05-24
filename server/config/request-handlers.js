var bodyParser = require('body-parser');
var request = require('./requests.js');
var fs = require('fs');

module.exports = {
  photoHandler: function (req, res) {
    req.files.forEach(function (file) {
      var image = file.path;
      var imagePath = '/../../' + image;
      fs.readFile(__dirname + imagePath, function(err, imageFile){
        request.photoAnalysisReq(imageFile, res);
      });
    });
  }
};

