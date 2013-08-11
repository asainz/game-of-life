'use strict';

angular.module('app.game').service('drawer',function(gameSettings){

    var colors = ['orange','green','yellow','red','blue','purple'],
        settings, totalRows, totalCols, tilesTotalAmount, liveTilesTotalAmount, tileSize, canvas, context;

    function setup(canvas){
        canvas = canvas;
        context = canvas.getContext('2d');
    }

    function setSettings(_settings){
        settings = _settings;
        totalRows = settings.totalRows,
        totalCols = settings.totalCols,
        tilesTotalAmount = settings.tilesTotalAmount,
        liveTilesTotalAmount = settings.liveTilesTotalAmount,
        tileSize = settings.tileSize,
        canvas, context;
    }

    function updateBoard(board){
        var i, j;

        context.clearRect(0, 0, 500, 500);
        context.fillStyle = colors[5];

        for(i=0 ; i < totalRows; i++){
            for(j=0 ; j < totalCols ; j++){
                if( board[i][j] ){
                    context.fillRect(i*tileSize , j*tileSize, tileSize, tileSize);
                }
            }
        }
    };

    return {
        setup: setup,
        updateBoard: updateBoard,
        setSettings: setSettings
    };

});