'use strict';

angular.module('app.game').controller('BoardCtrl', function ($scope, $timeout, boardState, gameSettings, player, drawer) {
    
    var settings = gameSettings.get();

    $scope.tiles = boardState.getRandom();

    drawer.setup( document.getElementById('board') );

    $scope.cycle = function(){
        $timeout(function(){
            var tiles = player.calculateNextCycle( $scope.tiles );
            $scope.tiles = tiles;
            drawer.updateBoard($scope.tiles);

            $scope.cycle();
        }, settings.delayCycle);
    };

    $scope.cycle();

});