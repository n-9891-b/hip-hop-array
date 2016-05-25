'use strict';

angular.module('app.recipes', [])

.controller('recipesCtrl', function($scope, $location, recipesFactory) {
  // $scope.recipes = recipesFactory.getRecipes();
  // console.log($scope.recipes);
  $scope.addToList = function(str){
    recipesFactory.myRecipesStorage.push(str);
    // myRecipesFactory.setMyRecipes(recipesFactory.myRecipesStorage);
    console.log("lol:", recipesFactory.myRecipesStorage);
  };

  $scope.goMyRecipes = function() {
    $location.path('/myrecipes');
  };
});