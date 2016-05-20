'use strict';

angular.module('app.fileUpload', [])

.controller('fileUploadCtrl', function($scope) {
  $scope.submitUrl = function(url) {
    console.log(url);
  };
});