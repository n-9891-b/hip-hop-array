'use strict';

angular.module('app', [
  'app.services',
  'app.fileUpload',
  'app.recipes',
  'app.myRecipes',
  'app.index',
  'ngRoute'
])
.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'app/views/fileUpload.html', 
    controller: 'fileUploadCtrl'
  })
  .when('/recipes', {
    templateUrl: 'app/views/recipes.html',
    controller: 'recipesCtrl'
  })
  .when('/myrecipes', {
    templateUrl: 'app/views/myRecipes.html',
    controller: 'myRecipesCtrl'
  })
  .when('/error', {
    templateUrl: 'app/views/fileError.html',
    controller: 'fileUploadCtrl'
  })
  .when('/loading', {
    templateUrl: 'app/views/loading.html',
    controller: 'fileUploadCtrl'
  })
  .otherwise({
    redirectTo: '/'
  })

  $locationProvider.html5Mode(true);
});