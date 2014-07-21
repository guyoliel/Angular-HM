(function(){
    function Log(scope,filter,log,dataStorage){
        log.debug('log controller is running');
        this.logs = dataStorage.get('logs');
        var log = this;
        scope.$on('event:saveTask',function(event){
            log.logs.push(filter('date')((new Date), 'short') + ' new task added');
            scope.$emit('event:saveToLocalLogs',log.logs);
        });

        scope.$on('event:logEditTask',function(event){
            log.logs.push(filter('date')((new Date), 'short') + ' task was updated');
            scope.$emit('event:saveToLocalLogs',log.logs);
        });

        scope.$on('event:logDeleteTask',function(event){
            log.logs.push(filter('date')((new Date), 'short') + ' task was deleted');
            scope.$emit('event:saveToLocalLogs',log.logs);
        });

        scope.$on('event:onClearLog',function(event){
            log.logs=[];
            scope.$emit('event:saveToLocalLogs',log.logs);
        });

        scope.$on('event:logCompleteTask',function(event,data){
            if (!data) {
                log.logs.push(filter('date')((new Date), 'short') + ' task was completed');
                scope.$emit('event:saveToLocalLogs',log.logs);
            }else{
                log.logs.push(filter('date')((new Date), 'short') + ' task was uncompleted');
                scope.$emit('event:saveToLocalLogs',log.logs);
            }

        });
    }
    angular.module('app')
        .controller('logCtrl', ['$scope','$filter','$log','dataStorage',Log]);
})();
