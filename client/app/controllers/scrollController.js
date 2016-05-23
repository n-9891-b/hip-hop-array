angular.module('app.scroll', [])
.controller('scrollController', function($scope, $location, $anchorScroll) {
  $scope.scrollToTop = function(id) {
    $location.hash(id);
    $anchorScroll();
  };
});