'use strict';

angular.module('app.myRecipes', [])

.controller('myRecipesCtrl', function($scope, recipesFactory) {
  $scope.myRecipesStorage = recipesFactory.myRecipesStorage;
  // $scope.printMyRec = function() {
  //   console.log("myrec", $scope.myRecipesStorage)
  //   return $scope.myRecipesStorage;
  // };
});