(function(){
    console.log('actionBar controller is running');
    function ActionBar(scope){
        this.clearLog = function(){
            scope.$emit('event:clearLog');
        }

        this.toggle = function(){
            scope.$emit('event:toggle');
        }
    }

    angular.module('app')
        .controller('actionBarCtrl', ['$scope', ActionBar])
})();
