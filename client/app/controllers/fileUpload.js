'use strict';

angular.module('app.fileUpload', ['ngFileUpload'])

.factory('imageUrl', function($http) {
  var sendUrl = function(url) {
    return $http({
      method: 'POST', 
      url: '/api/photo/recipes',
      data: {imageUrl: url}
    })
  };

  return {
    sendUrl: sendUrl
  };
})

.controller('fileUploadCtrl', function($scope, imageUrl, Upload, $timeout) {
  $scope.submitUrl = function(url) {
    console.log(url);
    imageUrl.sendUrl(url);
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
  }
});