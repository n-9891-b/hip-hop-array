'use strict';

angular.module('app.ingredients', [])

.controller('ingredientsCtrl', function($scope, ingredientsFactory) {
  $scope.ingredient = ingredientsFactory.getIngredient();
  console.log($scope.ingredient);

  $scope.printRec = function() {
    console.log("lol:", $scope.ingredient);
  }
});