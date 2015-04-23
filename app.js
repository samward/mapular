'use strict';

// Declare app level module which depends on views, and components
angular.module('mapularDemo', [
  'ngRoute',
  'mapularDemo.demo'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/demo'});
}]);
