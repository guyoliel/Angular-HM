/**
 * Created by בטי on 07/07/2014.
 */
(function(window,angular){
	console.log('app.js is running');

 	function Parent(scope){
		scope.$on('event:addTask',function(event,data){
			scope.$broadcast('event:saveTask',data);
		});

		scope.$on('event:editTask',function(event,data){
			scope.$broadcast('event:setTask',data);
		});

	}

	function TaskForm(scope){
		scope.task={};
		this.addTask=function(task){
				if(scope.task.done==undefined){
				scope.task.done=false;
				scope.$emit('event:addTask',task);
				scope.task={};
				}
				else{
					scope.task={};
				}
		}

		scope.$on('event:setTask',function(event,data){
			scope.task = data;
		});
	}

	function Table(scope){
		this.tasks = [];
		var self = this;
		scope.$on('event:saveTask',function(event,data){
			self.tasks.push(data);
		});

		this.editTask = function(task){
			scope.$emit('event:editTask',task);
		}
	}
	/*
	this.deleteTask = function (task) {
		var i = this.tasks.indexOf(task);
		this.tasks.splice(task,1);
	};
*/
  angular.module('app',[])
  		.controller('parentCtrl', ['$scope', Parent])
		.controller('taskFormCtrl', ['$scope', TaskForm])
		.controller('tableCtrl', ['$scope', Table]);
})(window,angular);
