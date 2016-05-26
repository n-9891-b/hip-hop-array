'use strict';

angular.module('app.myRecipes', [])

.controller('myRecipesCtrl', function($scope, recipesFactory) {
  $scope.myRecipesStorage = recipesFactory.myRecipesStorage;
});