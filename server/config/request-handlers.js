var bodyParser = require('body-parser');
var request = require('./requests.js');

module.exports = {
  photoHandler: function (req, res) {
    //var complied =[];
    // var imageURL1 = req.body.imageURL1;
    // var imageURL2 = req.body.imageURL2;
    var imageURL1 = req.body.imageUrl;//"https://upload.wikimedia.org/wikipedia/commons/8/88/Bright_red_tomato_and_cross_section02.jpg"; req.body.image
<<<<<<< HEAD
    console.log('imageUrl', imageURL1)
    request.photoAnalysisReq(imageURL1);
=======
    req.photoAnalysisReq(imageURL1);
>>>>>>> [fix] fixed errors
    //return compiled
  }
};


