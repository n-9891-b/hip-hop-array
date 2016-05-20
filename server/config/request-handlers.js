var bodyParser = require('body-parser');
var request = require('./requests.js');

module.exports = {
  photoHandler: function (req, res) {
    var imageURL1 = req.body.imageUrl;
    console.log(imageURL1);
    request.photoAnalysisReq(imageURL1, res);
  }
};


