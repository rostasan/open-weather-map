/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


angular.module('App', ['ngRoutes'])
      .config(['$routeProvider', function($routeProvider){
            $routeProvider.when('/', {
              templateUrl: 'templates/home.html',
              controller: 'homeCtrl'
            }).when('/city', {
              templateUrl: 'templates/city.html',
              controller: 'cityCtrl'
            });
      }])
      .controller('homeCtrl', function($scope){
      $scope.home = 'HOMMMMEEEE';
      })
      .controller('cityCtrl', function($scope){
        $scope.city = 'New York';
      });