var bodyParser = require('body-parser');
var request = require('./requests.js');

module.exports = {
  photoHandler: function (req, res) {
    var imageURL = "https://upload.wikimedia.org/wikipedia/commons/8/88/Bright_red_tomato_and_cross_section02.jpg" //req.body.image
    request.photoAnalysisReq(imageURL);
  }
};


