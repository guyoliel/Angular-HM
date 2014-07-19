(function(){

    function ActionBar(scope,log){
        log.debug('actionBar controller is running');
        this.clearLog = function(){
            scope.$emit('event:clearLog');
        }

        this.toggle = function(){
            scope.$emit('event:toggle');
        }
    }

    angular.module('app')
        .controller('actionBarCtrl', ['$scope','$log', ActionBar])
})();
