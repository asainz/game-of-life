'use strict';

angular.module('app.game').controller('BoardCtrl', function ($scope, $timeout, boardState, gameSettings, player, drawer) {
    var settings, timerCycle;

    function getCurrentSettings(){
        settings = gameSettings.get();
        drawer.setSettings(settings);

        $timeout.cancel(timerCycle);
        $scope.tiles = boardState.getRandom();
        $scope.cycle();
    }

    $scope.cycle = function(){
        timerCycle = $timeout(function(){
            var tiles = player.calculateNextCycle( $scope.tiles );
            $scope.tiles = tiles;
            drawer.updateBoard($scope.tiles);

            $scope.cycle();
        }, settings.delayCycle);
    };

    $scope.$on('settingsupdated', function(){
        getCurrentSettings();
    });

    //start the drawing cycles
    getCurrentSettings();
    drawer.setup( document.getElementById('board') );
    drawer.setSettings(settings);
    $scope.tiles = boardState.getRandom();
    $scope.cycle();

});