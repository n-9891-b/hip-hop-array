'use strict';

angular.module('app', [
  'app.services',
  'app.fileUpload',
  'app.ingredients',
  'app.scroll',
  'ngRoute'
])
.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'app/views/fileUpload.html', 
    controller: 'fileUploadCtrl'
  })
  .when('/ingredients', {
    templateUrl: 'app/views/ingredients.html',
    controller: 'ingredientsCtrl'
  })
  .otherwise({
    redirectTo: '/'
  })
});