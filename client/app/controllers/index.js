'use strict';

angular.module('app.index', ['ngRoute'])

.config(function($routeProvider, $httpProvider) {
  $routeProvider
  .when('/', {
    // not sure about the route name
    templateUrl: '/./views/index.html', 
    controller: 'indexCtrl'
  })
})

.controller('indexCtrl', function($scope) {

});