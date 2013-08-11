'use strict';

describe('Controller: BoardCtrl', function () {

  // load the controller's module
  beforeEach(module('app.game'));

  var BoardCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BoardCtrl = $controller('BoardCtrl', {
      $scope: scope
    });
  }));

});
