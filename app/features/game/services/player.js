'use strict';

angular.module('app.game').service('player',function(gameSettings){

    var settings = gameSettings.get(),
        totalRows = settings.totalRows,
        totalCols = settings.totalCols,
        tilesTotalAmount = settings.tilesTotalAmount,
        liveTilesTotalAmount = settings.liveTilesTotalAmount;

    function calculateState(board, row, col){
        var currentState = board[row][col],
            rowInit = row - 2,
            rowEnd = row + 2,
            colInit = col - 2,
            colEnd = col + 2,
            liveCount = 0,
            deadCount = 0,
            newState, i, j;

        if( rowInit < 0 ){
            rowInit = 0;
        }

        if( rowEnd > totalRows ){
            rowEnd = totalRows;
        }

        if( colInit < 0 ){
            colInit = 0;
        }

        if( colInit > totalCols ){
            colInit = totalCols;
        }

        for(i=rowInit; i < rowEnd ; i++){
            for(j=colInit ; j < colEnd ; j++){
                //if i'm not working on the current tile
                if( i !== row || j !== col ){
                    if( board[i][j] === 0 ){
                        deadCount++;
                    }
                    if( board[i][j] === 1 ){
                        liveCount++;
                    }
                }
            }
        }

        //default state
        newState = 0;

        if( currentState && liveCount < 2 ){
            newState = 0;
        }

        if( currentState && liveCount === 2 || liveCount === 3 ){
            newState = 1;
        }

        if( currentState &&  liveCount > 3 ){
            newState = 0;
        }

        if( !currentState && liveCount === 3 ){
            newState = 1;
        }

        return newState;
    }

    function calculateNextCycle(board){
        var newBoard = [], row, col, i, j;

        for(i=0; i < totalRows ; i++){
            row = _.clone( board[i] );
            for(j=0 ; j < totalCols ; j++){
                row[j] = calculateState(board, i, j);
            }
            newBoard.push(row);
        }

        return newBoard;
    }

    return {
        calculateNextCycle: calculateNextCycle
    };

});