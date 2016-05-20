'use strict';

angular.module('app.fileUpload', ['ngFileUpload'])

.controller('fileUploadCtrl', function($scope, imageUrlFactory, $location, Upload, $timeout, ingredientsFactory) {
  $scope.submitUrl = function(url) {
    imageUrlFactory.sendUrl(url, function(data) {
      ingredientsFactory.setIngredient(data);
      $location.path('/ingredients');
    });
  };

  $scope.submitImages = function () {
      $scope.uploadFiles($scope.files);
  };

  $scope.uploadFiles = function(files) {  //, errFiles
    if (files && files.length) {
      console.log(files);
      console.log(files[0].constructor);
      Upload.upload({
        url: '/api/photo',
        data: {files: files}
      });
    };
  }
});