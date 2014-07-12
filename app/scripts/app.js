/**
 * Created by בטי on 07/07/2014.
 */
(function(window,angular){
	console.log('app.js is running');

 	function Parent(scope){
		scope.$on('event:addTask',function(event,data){
			scope.$broadcast('event:saveTask',data);
		});
	}

	function TaskForm(scope){
		scope.task={};
		this.addTask=function(task){
			if (scope.task.done==null) {
				scope.task.done=false;
				scope.$emit('event:addTask',task);
			}
			else {
				scope.$emit('event:updateTask',task);
			}
			scope.task={};
		}
	}

	function Table(scope){
		this.tasks = [];
		var self = this;
		scope.$on('event:saveTask',function(event,data){
			self.tasks.push(data);
		});
	}
	/*
	this.tasks = [];
	this.task = {};
	this.edit = false;
	this.addTask = function (task) {
		this.tasks.push(task);
		this.task = {};
		this.edit = false
	};
	this.deleteTask = function (task) {
		var i = this.tasks.indexOf(task);
		this.tasks.splice(task,1);
	};

	this.startEditTask = function (task){
		this.edit=true;
		this.task = task;
	*/
  angular.module('app',[])
  		.controller('parentCtrl', ['$scope', Parent])
		.controller('taskFormCtrl', ['$scope', TaskForm])
		.controller('tableCtrl', ['$scope', Table]);
})(window,angular);
