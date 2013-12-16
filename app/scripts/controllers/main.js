'use strict';

angular.module('bibliotecaApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.welcomeMessage = 'Welcome to Biblioteca';

  });
