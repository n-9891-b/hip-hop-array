'use strict';

angular.module('app.services', [])

.factory('recipesFactory', function() {
  var totalRecipes;
  var myRecipesStorage = [];

  return {
    totalRecipes: totalRecipes,
    myRecipesStorage: myRecipesStorage
  };
});