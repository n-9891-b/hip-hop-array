var bodyParser = require('body-parser');
var request = require('./requests.js');

module.exports = {
  photoHandler: function (req, res) {
    Promise.all(req.files.map(function(item) {
      return request.photoAnalysisReq('/../../' + item.path);
    }))
    .then(function(resultsArray) {
      request.recipesReq(resultsArray, res);
    });
  }
};

