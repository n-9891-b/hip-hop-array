'use strict';

angular.module('app.fileUpload', ['ngFileUpload'])

.controller('fileUploadCtrl', function($scope, imageUrlFactory, $location, Upload, $timeout, ingredientsFactory) {
  $scope.submitUrl = function(url) {
    imageUrlFactory.sendUrl(url, function(data) {
      ingredientsFactory.setIngredient(data);
      $location.path('/ingredients');
    });
  };

  $scope.uploadFiles = function(files, errFiles) {
    $scope.files = files;
    $scope.errFiles = errFiles;
    angular.forEach(files, function(file) {
      file.upload = Upload.upload({
        url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
        data: {file: file}
      });

      file.upload.then(function (response) {
        $timeout(function () {
          console.log(response.data);
          file.result = response.data;
        });
      }, function (response) {
        if (response.status > 0)
          $scope.errorMsg = response.status + ': ' + response.data;
      }, function (evt) {
        file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
      });
    });
  };
});