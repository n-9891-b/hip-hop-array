'use strict';

angular.module('app', [
  'ngRoute',
  'app.index'
])
.config(function($routeProvider) {
  $routeProvider
  .otherwise({
    redirectTo: '/'
  })
});