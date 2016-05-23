var request = require('request');
var requestHandler = require('./request-handlers');
var Promise = require('bluebird');
var AlchemyAPI = require('alchemy-api');
var alchemy = new AlchemyAPI('82ef262b9654e3ac400ff00238a1cc588c309e9c');
var FoodToForkAPI = '6c217911dc3551a37654ed22d97dabdb';

module.exports = {
  photoAnalysisReq: function (image, res) {
<<<<<<< HEAD
      // images.forEach(alchemy(image))
      
      return new Promise (function (resolve, reject) {
        alchemy.imageKeywords(image, {}, function (err, response) {
        if (err) throw err;
        var imageKeywords = response.imageKeywords;
        var foodType = imageKeywords[0].text;
        resolve(foodType);
        });
      })
=======
    return new Promise (function (resolve, reject) {
      alchemy.imageKeywords(image, {}, function (err, response) {
      if (err) throw err;
      var imageKeywords = response.imageKeywords;
      var foodType = imageKeywords[0].text;
      resolve(foodType);
      });
    })
>>>>>>> [chore] implement photo upload streaming and analysis
    .then(function(foodType) {
      res.send(foodType);
    });
  },

  recipesReq: function (reqInfo, res) {
    var ingredientJoin = reqInfo.join(', ');
    request('http://food2fork.com/api/search?key=' + FoodToForkAPI + '&q=' + ingredientJoin, function (err, response, body) {
      if (err) throw err;
      res.send(body);
    });
  }

}