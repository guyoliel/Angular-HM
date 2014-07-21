(function(){
    	function Table(scope,log,dataStorage){
        log.debug('table controller is running');
		this.tasks = dataStorage.get('tasks');
		this.show = false;
		var self = this;
		scope.$on('event:saveTask',function(event,data){
			self.tasks.push(data);
            scope.$emit('event:saveToLocalTasks',self.tasks);
		});

		this.editTask = function(task){
			scope.$emit('event:editTask',task);
		}

		this.deleteTask = function (task) {
            var i = self.tasks.indexOf(task);
			this.tasks.splice(i,1);
			scope.$emit('event:deleteTask');
            scope.$emit('event:saveToLocalTasks',self.tasks);
		};

		this.completeTask = function(bool) {
			scope.$emit('event:completeTask',bool);
            scope.$emit('event:saveToLocalTasks',self.tasks);
		}

        scope.$on('event:logEditTask',function(event,data){
            scope.$emit('event:saveToLocalTasks',self.tasks);
        });

	    scope.$on('event:onToggle',function(event){
	        self.show= !self.show;
		});
	}
    angular.module('app')
        .controller('tableCtrl', ['$scope','$log','dataStorage', Table]);
})();
