'use strict';

angular.module('app', [
  'app.fileUpload',
  'ngRoute'
])
.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'app/views/fileUpload.html', 
    controller: 'fileUploadCtrl'
  })
  .otherwise({
    redirectTo: '/'
  })
});