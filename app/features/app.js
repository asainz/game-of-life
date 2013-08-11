'use strict';

angular.module('app', ['app.game'])
  .config(function ($routeProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/game'
      });
  });
