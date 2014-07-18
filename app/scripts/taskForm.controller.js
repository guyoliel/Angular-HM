(function(){
    console.log('taskForm controller is running');
    function TaskForm(scope){
        scope.task={};
        var self = this;
        this.addTask=function(task){
                if(scope.task.done==undefined){
                scope.task.done=false;
                scope.$emit('event:addTask',task);
                scope.task={};
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
        .controller('taskFormCtrl',['$scope',TaskForm]);
})();
