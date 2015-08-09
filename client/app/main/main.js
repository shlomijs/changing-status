'use strict';

angular.module('changingStatusApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/home',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
  });
