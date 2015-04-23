'use strict';

angular.module('mapularDemo.demo', ['ngRoute', 'mapular'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/demo', {
    templateUrl: 'demo/demo.html',
    controller: 'DemoCtrl'
  });
}])

.controller('DemoCtrl', ['$scope', 'Mapular', function($scope, Mapular) {

  $scope.mapsUrl = function (args) {
    return Mapular.url(args);
  };

}]);
