'use strict';

angular.module('app.recipes', [])

.controller('recipesCtrl', function($scope, $location, recipesFactory) {
  $scope.totalRecipes = recipesFactory.totalRecipes;
  $scope.isActive = false;

  $scope.addToList = function(item){
    if (recipesFactory.myRecipesStorage.indexOf(item) === -1 && !item.isActive) {
      recipesFactory.myRecipesStorage.push(item);
      item.isActive = true;
    } else {
      var index = recipesFactory.myRecipesStorage.indexOf(item);
      recipesFactory.myRecipesStorage.splice(index, 1);
      delete item.isActive;
    }
  };
});