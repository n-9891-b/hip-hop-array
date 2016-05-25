'use strict';

angular.module('app.recipes', [])

.controller('recipesCtrl', function($scope, $location, recipesFactory) {
  $scope.totalRecipes = recipesFactory.totalRecipes;
  
  $scope.addToList = function(str){
    recipesFactory.myRecipesStorage.push(str);
    console.log("lol:", recipesFactory.myRecipesStorage);
  };

  $scope.goMyRecipes = function() {
    $location.path('/myrecipes');
  };
});