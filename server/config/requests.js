var request = require('request');
var watson = require('watson-developer-cloud');
var AlchemyAPI = require('alchemy-api');
var alchemy = new AlchemyAPI('bfa7f6b236ba90e1b2cadd86f5b6f8203f6123c9');
var FoodToForkAPI = '6c217911dc3551a37654ed22d97dabdb';

module.exports = {
  photoAnalysisReq: function (image) {
      // var imageKeywords = [];
      // for (key in object) {                                                 //image right now is going to be a URL in form {req.body.image: url || imageEventually}
      alchemy.imageKeywords(image, {}, function (err, response) { //right now this is image = url
      if (err) throw err;
      // See http://www.alchemyapi.com/api/image-tagging/urls.html for format of returned object
      var imageKeywords = response.imageKeywords; //JSON OBJECT

      //compiled.push(imageKeyword);
      var foodType = imageKeywords[0].text;
        // console.log(foodType);
        module.exports.recipesReq(foodType);
    // }


      // res.send(imageKeywords);
      // recipesReq(imageKeywords);
    });
  },

  recipesReq: function (reqInfo) { //makes the recipe call
    request('http://food2fork.com/api/search?key=' + FoodToForkAPI + '&q=' + reqInfo, function (err, response, body) {
      if (err) throw err;
      response.send(body);
    });
  }

}