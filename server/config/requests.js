var request = require('request');
var requestHandler = require('./request-handlers');
var Promise = require('bluebird');
var fs = require('fs');
var FoodToForkAPI = '6c217911dc3551a37654ed22d97dabdb';
var imaggaAPIKey = 'acc_b02d1ac609e06b3';
var imaggaAPISecret = '77aca2043d0f9bf92cce3db7abd52b38';
var imaggaEndpoint = 'https://api.imagga.com/v1/tagging?content=';

module.exports = {
  photoAnalysisReq: function (imagePath) {
    return new Promise (function (resolve, reject) {
      var formData = {
        image: fs.createReadStream(__dirname + imagePath)
      };

      request.post({url:'https://api.imagga.com/v1/content', formData: formData},
        function (error, response, body) {
          var data = JSON.parse(body);
          var id = data.uploaded[0].id;

          request.get(imaggaEndpoint + id, function(error, response, body) {
            var data = JSON.parse(body);
            var ingredient = data.results[0].tags[0].tag;
            resolve(ingredient);
          }).auth(imaggaAPIKey, imaggaAPISecret, true);
        }).auth(imaggaAPIKey, imaggaAPISecret, true);
    });
  },

  recipesReq: function (reqInfo, res) {
    var ingredientJoin = reqInfo.join(', ');
    request('http://food2fork.com/api/search?key=' + FoodToForkAPI + '&q=' + ingredientJoin, function (err, response, body) {
      if (err) throw err;
      console.log('recipes', body);
      res.send(body);
    });
  }
}