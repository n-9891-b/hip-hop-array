var request = require('request');
var requestHandler = require('./request-handlers');
var Promise = require('bluebird');
var fs = require('fs');
var AlchemyAPI = require('alchemy-api');
var alchemy = new AlchemyAPI('82ef262b9654e3ac400ff00238a1cc588c309e9c');
var FoodToForkAPI = '6c217911dc3551a37654ed22d97dabdb';

module.exports = {
  photoAnalysisReq: function (imagePath) {
    return new Promise (function (resolve, reject) {
      fs.readFile(__dirname + imagePath, function(err, imageFile){
        if(err) throw err;
        alchemy.imageKeywords(imageFile, {}, function (err, response) {
          if (err) throw err;
          var imageKeywords = response.imageKeywords;
          var foodType = imageKeywords[0].text;
          resolve(foodType);
        });
      });
    })
  },

  recipesReq: function (reqInfo, res) {
    var ingredientJoin = reqInfo.join(', ');
    request('http://food2fork.com/api/search?key=' + FoodToForkAPI + '&q=' + ingredientJoin, function (err, response, body) {
      if (err) throw err;
      res.send(body);
    });
  }

}