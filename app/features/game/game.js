'use strict';

angular.module('app.game', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/game', {
        templateUrl: 'features/game/views/game.tpl.html',
        controller: 'GameCtrl'
      });
  });