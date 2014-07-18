(function(){
    console.log('table controller is running');
    	function Table(scope){
		this.tasks = [];
		this.show = false;
		var self = this;
		scope.$on('event:saveTask',function(event,data){
			self.tasks.push(data);
		});

		this.editTask = function(task){
			scope.$emit('event:editTask',task);
		}

		this.deleteTask = function (task) {
            var i = self.tasks.indexOf(task);
			this.tasks.splice(i,1);
			scope.$emit('event:deleteTask');
		};

		this.completeTask = function(bool) {
			scope.$emit('event:completeTask',bool);
		}
	    scope.$on('event:onToggle',function(event){
	        self.show= !self.show;
		});
	}
    angular.module('app')
        .controller('tableCtrl', ['$scope', Table]);
})();
