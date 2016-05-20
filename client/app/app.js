'use strict';

angular.module('app', [
  'app.services',
  'app.fileUpload',
  'app.recipes',
  'ngRoute'
])
.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'app/views/fileUpload.html', 
    controller: 'fileUploadCtrl'
  })
  .when('/recipes', {
    templateUrl: 'app/views/recipes.html',
    controller: 'recipesCtrl'
  })
  .otherwise({
    redirectTo: '/'
  })
});