'use strict';

angular.module('app.game').service('gameSettings',function(){
    
    var defaults = {
            boardWidth: 500,
            boardHeight: 500,
            tileSize: 1,
            liveTilesPercentage: 70, //percentage
            delayCycle: 25 //ms
        },
        current = {};

    function getBoardInfo(settings){
        var totalRows = settings.boardWidth / settings.tileSize,
            totalCols = settings.boardHeight / settings.tileSize,
            tilesTotalAmount = totalRows * totalCols,
            liveTilesTotalAmount = Math.round( settings.liveTilesPercentage * tilesTotalAmount / 100 );

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

    function update(params){
        for(var key in params){
            current[key] = params[key];
        }
    }

    return {
        get: get,
        update: update
    };

});