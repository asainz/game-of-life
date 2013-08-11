'use strict';

angular.module('app.game').controller('GameSettingsCtrl', function ($rootScope, $scope, gameSettings) {
    
    var settings = gameSettings.get();

    function onSettingsChangedByUser(field, value){
        var data = {};
        data[field] = value || 1;

        gameSettings.update(data);
        $rootScope.$broadcast('settingsupdated');
    }

    $scope.settings = {
        liveTilesPercentage: settings.liveTilesPercentage,
        tileSize: settings.tileSize,
        delayCycle: settings.delayCycle
    };

    $scope.$watch('settings.liveTilesPercentage', function(value, oldValue){
        onSettingsChangedByUser('liveTilesPercentage', value);
    });

    $scope.$watch('settings.tileSize', function(value, oldValue){
        onSettingsChangedByUser('tileSize', value);
    });

    $scope.$watch('settings.delayCycle', function(value, oldValue){
        onSettingsChangedByUser('delayCycle', value);
    });

});