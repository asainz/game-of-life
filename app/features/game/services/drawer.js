'use strict';

angular.module('app.game').service('drawer',function(gameSettings){

    var settings = gameSettings.get(),
        colors = ['orange','green','yellow','red','blue','purple'],
        totalRows = settings.totalRows,
        totalCols = settings.totalCols,
        tilesTotalAmount = settings.tilesTotalAmount,
        liveTilesTotalAmount = settings.liveTilesTotalAmount,
        tileWidth = settings.tileWidth,
        tileHeight = settings.tileHeight,
        canvas, context;

    function setup(canvas){
        canvas = canvas;
        context = canvas.getContext('2d');
    }

    function updateBoard(board){
        var i, j;

        context.clearRect(0, 0, 500, 500);
        context.fillStyle = colors[5];

        for(i=0 ; i < totalRows; i++){
            for(j=0 ; j < totalCols ; j++){
                if( board[i][j] ){
                    context.fillRect(i*tileWidth , j*tileHeight, tileWidth, tileHeight);
                }
            }
        }
    };

    return {
        setup: setup,
        updateBoard: updateBoard
    };

});