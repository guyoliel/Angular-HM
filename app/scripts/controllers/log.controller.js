(function(){
    console.log('log controller is running');
    function Log(scope,filter){
        this.logs = [];
        var log = this;
        scope.$on('event:saveTask',function(event){
            log.logs.push(filter('date')((new Date), 'short') + ' new task added');
        });

        scope.$on('event:logEditTask',function(event){
            log.logs.push(filter('date')((new Date), 'short') + ' task was updated');
        });

        scope.$on('event:logDeleteTask',function(event){
            log.logs.push(filter('date')((new Date), 'short') + ' task was deleted');
        });

        scope.$on('event:onClearLog',function(event){
            log.logs=[];
        });

        scope.$on('event:logCompleteTask',function(event,data){
            if (!data) {
                log.logs.push(filter('date')((new Date), 'short') + ' task was completed');
            }else{
                log.logs.push(filter('date')((new Date), 'short') + ' task was uncompleted');
            }

        });
    }
    angular.module('app')
        .controller('logCtrl', ['$scope','$filter',Log]);
})();
