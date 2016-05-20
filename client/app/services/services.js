'use strict';

angular.module('app.services', [])

.factory('imageUrl', function($http) {

  function sendUrl(url, cb) {
    return $http({
      method: 'POST', 
      url: '/api/photo/recipes',
      data: {imageUrl: url}
    })
    .then(function success(response) {
      cb(response.data);
    })
    .catch(function() {
      console.error('error during recipe API fetch');
    })
  }

  return {
    sendUrl: sendUrl
  };
})

.factory('recipesFactory', function() {
  var recipes = '';

  function setRecipes(recipesResponse) {
    recipes = recipesResponse;
  }

  function getRecipes() {
    return recipes;
  }

  return {
    getRecipes: getRecipes,
    setRecipes: setRecipes
  }
})