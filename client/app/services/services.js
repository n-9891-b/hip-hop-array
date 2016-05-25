'use strict';

angular.module('app.services', [])

.factory('imageUrlFactory', function($http) {
  // function sendUrl(url, cb) {
  //   return $http({
  //     method: 'POST', 
  //     url: '/api/photo/recipes',
  //     data: {imageUrl: url}
  //   })
  //   .then(function success(response) {
  //     cb(response.data);
  //   })
  //   .catch(function() {
  //     console.error('error during ingredient API fetch');
  //   })
  // }

  function sendFiles(imagesArr, cb){
    // return $http({
    //   method: 'POST',
    //   url: '/api/photo/recipes',
    //   data: {imageUrl: imagesArr}
    // })
    // .then(function success(response) {
    //   cb(response.data);
    // })
    // .catch(function() {
    //   console.error('error during ingredient API fetch');
    // })
  }

  return {
    // sendUrl: sendUrl,
    sendFiles: sendFiles
  };
})

.factory('recipesFactory', function() {
  var myRecipesStorage = [];

  return {
    myRecipesStorage: myRecipesStorage
  };
});