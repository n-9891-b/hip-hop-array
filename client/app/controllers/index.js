angular.module('app.index', [])
.controller('indexCtrl', function($scope, $location, $anchorScroll, recipesFactory) {
  $scope.scrollToTop = function(id) {
    $location.hash(id);
    $anchorScroll();
  };

  $scope.goToMyRecipes = function() {  
    if (recipesFactory.myRecipesStorage.length === 0) {
      $location.path('/error');
    } else {
      $location.path('/myrecipes');
    }
  }
});