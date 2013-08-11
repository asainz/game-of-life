'use strict';

angular.module('app.game').service('boardState',function(gameSettings){

    var settings = gameSettings.get(),
        totalRows = settings.totalRows,
        totalCols = settings.totalCols,
        tilesTotalAmount = settings.tilesTotalAmount,
        liveTilesTotalAmount = settings.liveTilesTotalAmount;

    function getRandom(){
        var board = [], currentLiveTiles = 0, tile, i, j;

        for(i=0; i < totalRows ; i++){
            board[i] = [];
            for(j=0 ; j < totalCols ; j++){
                tile = currentLiveTiles < liveTilesTotalAmount && Math.random() > (1-settings.liveTilesPercentage/100) ? 1 : 0;
                if(tile === 1){
                    currentLiveTiles++;
                }
                board[i].push( tile );
            }
        }

        return board;
    }

    return {
        getRandom: getRandom
    };

});