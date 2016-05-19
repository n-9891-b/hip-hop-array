var request = require('request');
var watson = require('watson-developer-cloud');
var AlchemyAPI = require('alchemy-api');
var alchemy = new AlchemyAPI('bfa7f6b236ba90e1b2cadd86f5b6f8203f6123c9');

module.exports = {
  photoAnalysisReq: function (image) {
    //image right now is going to be a URL in form {req.body.image: url || imageEventually}
    alchemy.imageKeywords(image, {}, function (err, response) { //right now this is image = url
    if (err) throw err;
    // See http://www.alchemyapi.com/api/image-tagging/urls.html for format of returned object
    var imageKeywords = response.imageKeywords; //JSON OBJECT
      console.log(imageKeywords);
      // res.send(imageKeywords);
      // recipesReq(imageKeywords);
    });
  },

  // recipesReq: function (reqInfo) { //makes the recipe call
  //   request(/* url goes here */, function (err, response, body) {

  //   });    
  // } 

}