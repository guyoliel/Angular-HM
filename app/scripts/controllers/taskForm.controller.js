(function(){
    function TaskForm(scope,log,dataStorage){
        log.debug('taskForm controller is running');
        scope.task={};
        scope.options=['Priority','High','Medium','Low'];
        scope.task.priority=scope.options[0];
        this.addTask=function(task){
                if(scope.task.done==undefined){
                scope.task.done=false;
                scope.$emit('event:addTask',task);
                scope.task={};
                scope.task.priority=scope.options[0];
                }
                else{
                    scope.task={};
                    scope.edit = false;
                    scope.$emit('event:editedTask',task);
                }
        }

        scope.$on('event:setTask',function(event,data){
            scope.task = data;
            scope.edit = true;
        });

    }

    angular.module('app')
        .controller('taskFormCtrl',['$scope','$log',TaskForm]);
})();
