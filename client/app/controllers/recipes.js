'use strict';

angular.module('app.recipes', [])

.controller('recipesCtrl', function($scope, $location, recipesFactory) {
  $scope.totalRecipes = recipesFactory.totalRecipes;
  
  $scope.addToList = function(item){
    if (recipesFactory.myRecipesStorage.indexOf(item) === -1) {
      recipesFactory.myRecipesStorage.push(item);
    }
    console.log("lol:", recipesFactory.myRecipesStorage);
  };

  $scope.goMyRecipes = function() {
    $location.path('/myrecipes');
  };
});