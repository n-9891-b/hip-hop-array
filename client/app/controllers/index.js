'use strict';
angular.module('app', [
])

.controller('app.fileUploadCtrl', function($scope) {
  $scope.url = '';

  $scope.poop = function() {
    console.log($scope.url);
  }
});