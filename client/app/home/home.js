'use strict';

angular.module('changingStatusApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/home/home.html',
        controller: 'HomeCtrl',
            controllerAs:'f'
      });
  });