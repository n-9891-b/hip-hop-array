'use strict';

angular.module('app.fileUpload', ['ngFileUpload'])

.controller('fileUploadCtrl', function($scope, imageUrlFactory, $location, Upload, ingredientsFactory) {
  // $scope.submitUrl = function(url) {
  //   imageUrlFactory.sendUrl(url, function(data) {
  //     ingredientsFactory.setIngredient(data);
  //     $location.path('/ingredients');
  //   });
  // };
  $scope.flag = false;

  $scope.submitImages = function () {
    $scope.uploadFiles($scope.files);
  };

  $scope.uploadFiles = function(files) { 
    if (files && files.length) {
      console.log('files', files);
        Upload.upload({
          url: '/api/photo/ingredients',
          arrayKey: '',
          data: {photos: files}
        }).then(function(res){
          console.log(res);
        });
    }
  };

  $scope.removeImage = function(image) {
    $scope.files.splice(($scope.files.indexOf(image)), 1);

    if ($scope.files.length === 0) {
      $scope.flag = false;
    }
    console.log($scope.files);
  };

  $scope.changeFlag = function() {
    $scope.flag = true;
  };
});