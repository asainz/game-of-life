'use strict';

describe('Controller: GameSettingsCtrl', function () {

  // load the controller's module
  beforeEach(module('app.game'));

  var GameSettingsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GameSettingsCtrl = $controller('GameSettingsCtrl', {
      $scope: scope
    });
  }));

});
