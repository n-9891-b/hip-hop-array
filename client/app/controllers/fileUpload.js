'use strict';

angular.module('app.fileUpload', ['ngFileUpload'])

.controller('fileUploadCtrl', function($scope, $location, Upload, recipesFactory) {
  $scope.flag = false;
  $scope.files = [];

  $scope.submitImages = function () {
    if($scope.files.length > 0) {
      $location.path('/loading');
      $scope.uploadFiles($scope.files);
    } else {
      $scope.error = "*IMAGE REQUIRED";
    }
  };

  $scope.uploadFiles = function(files) { 
    if (files && files.length) {
      Upload.upload({
        url: '/api/photo/ingredients',
        arrayKey: '',
        data: {photos: files}
      }).then(function(res){
        var totalRecipes = res.data.recipes;
        $scope.recipes = totalRecipes.slice(0, 12);
        recipesFactory.totalRecipes = $scope.recipes;

        if (recipesFactory.totalRecipes.length > 0) {
          $location.path('/recipes');
        } else {
          $location.path('/error');
        }
      });
    }
  };

  $scope.removeImage = function(image) {
    $scope.files.splice(($scope.files.indexOf(image)), 1);

    if ($scope.files.length === 0) {
      $scope.flag = false;
      $scope.error = "*IMAGE REQUIRED";
    }
  };

  $scope.changeFlag = function() {
    $scope.flag = true;
    if($scope.flag) {
      $scope.error = " ";
    }
  };
});