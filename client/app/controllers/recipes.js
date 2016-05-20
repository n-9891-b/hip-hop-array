'use strict';

angular.module('app.recipes', [])

.controller('recipesCtrl', function($scope, recipesFactory) {
  $scope.recipes = recipesFactory.getRecipes();
  console.log($scope.recipes);

  $scope.printRec = function() {
    console.log("lol:", $scope.recipes);
  }
});