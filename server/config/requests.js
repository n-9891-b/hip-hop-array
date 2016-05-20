var request = require('request');
var requestHandler = require('./request-handlers');
var watson = require('watson-developer-cloud');
var Promise = require('bluebird');
var AlchemyAPI = require('alchemy-api');
var alchemy = new AlchemyAPI('bfa7f6b236ba90e1b2cadd86f5b6f8203f6123c9');
var FoodToForkAPI = '6c217911dc3551a37654ed22d97dabdb';

module.exports = {
  photoAnalysisReq: function (image, res) {
      return new Promise (function (resolve, reject) {
        alchemy.imageKeywords(image, {}, function (err, response) {
        if (err) throw err;
        var imageKeywords = response.imageKeywords;
        var foodType = imageKeywords[0].text;
        resolve(foodType);
        });
      })
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