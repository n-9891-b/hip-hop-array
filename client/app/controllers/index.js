angular.module('app.index', [])
.controller('indexCtrl', function($scope, $location, $anchorScroll) {
  $scope.scrollToTop = function(id) {
    $location.hash(id);
    $anchorScroll();
  };

  $scope.goToHomepage = function() {
    console.log('hi there')
    $location.path('/');
  };
});