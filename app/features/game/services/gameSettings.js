'use strict';

angular.module('app.game').service('gameSettings',function(){
    
    var defaults = {
            boardWidth: 500,
            boardHeight: 500,
            tileWidth: 1,
            tileHeight: 1,
            liveTilesAmount: 60, //percentage
            delayCycle: 25 //ms
        },
        current = {};

    function getBoardInfo(settings){
        var totalRows = settings.boardWidth / settings.tileWidth,
            totalCols = settings.boardWidth / settings.tileWidth,
            tilesTotalAmount = totalRows * totalCols,
            liveTilesTotalAmount = Math.round( settings.liveTilesAmount * tilesTotalAmount / 100 );

        return {
            totalRows: totalRows,
            totalCols: totalCols,
            tilesTotalAmount: totalRows * totalCols,
            liveTilesTotalAmount: liveTilesTotalAmount
        };
    }

    function get(){
        var settings = _.extend({}, defaults, current);
        return _.extend({}, settings, getBoardInfo(settings));
    }

    return {
        get: get
    };

});