(function(){
    function Parent(scope,log){
       log.debug('parent controller is running');
       scope.actionshow=false;
       scope.$on('event:addTask',function(event,data){
           scope.$broadcast('event:saveTask',data);
       });

       scope.$on('event:editTask',function(event,data){
           scope.$broadcast('event:setTask',data);
       });

       scope.$on('event:deleteTask',function(event){
           scope.$broadcast('event:logDeleteTask');
       });

       scope.$on('event:editedTask',function(event){
           scope.$broadcast('event:logEditTask');
       });

       scope.$on('event:clearLog',function(event){
           scope.$broadcast('event:onClearLog');
       });

       scope.$on('event:toggle',function(event){
           scope.$broadcast('event:onToggle');
       });

       scope.$on('event:completeTask',function(event,data){
           scope.$broadcast('event:logCompleteTask',data);
       });
   }
     angular.module('app')
         .controller('parentCtrl', ['$scope','$log', Parent]);
})();
