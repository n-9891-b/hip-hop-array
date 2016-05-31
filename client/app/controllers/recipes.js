'use strict';

angular.module('app.recipes', [])

.controller('recipesCtrl', ['$scope', 'recipesFactory', function($scope, recipesFactory) {
  $scope.totalRecipes = recipesFactory.totalRecipes;

  $scope.addRemoveToList = function(item){
    if (recipesFactory.myRecipesStorage.indexOf(item) === -1) {
      item.blurred = true;
      item.added = true;
      recipesFactory.myRecipesStorage.push(item);
    } else {
      var index = recipesFactory.myRecipesStorage.indexOf(item);
      recipesFactory.myRecipesStorage.splice(index, 1);
      item.blurred = false;
      item.added = false;
    }
  };
}]);