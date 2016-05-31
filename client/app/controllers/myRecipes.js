'use strict';

angular.module('app.myRecipes', [])

.controller('myRecipesCtrl', ['$scope', 'recipesFactory', '$location', function($scope, recipesFactory, $location) {
  $scope.myRecipesStorage = recipesFactory.myRecipesStorage;

  $scope.removeFromMyRecipes = function(recipe) {
    var index = recipesFactory.myRecipesStorage.indexOf(recipe);
    recipesFactory.myRecipesStorage.splice(index, 1);
    recipe.blurred = false;
    recipe.added = false;

    if (recipesFactory.myRecipesStorage.length === 0) {
      $location.path('/error');
    }
  }
}]);