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
			console.log(data);
			scope.$broadcast('event:logCompleteTask',data);
		});
	}

	function ActionBar(scope){
		this.clearLog = function(){
			scope.$emit('event:clearLog');
		}

		this.toggle = function(){
			scope.$emit('event:toggle');
		}
	}

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
			this.tasks.splice(task,1);
			scope.$emit('event:deleteTask');
		};

		this.completeTask = function(bool) {
			scope.$emit('event:completeTask',bool);
		}
		scope.$on('event:onToggle',function(event){
			self.show= !self.show;
		});
	}

	function wordCount(msg){
		var arr = msg.split(" ");
	}

  angular.module('app',['ngAnimate'])
  		.controller('parentCtrl', ['$scope', Parent])
		.controller('taskFormCtrl', ['$scope', TaskForm])
		.controller('tableCtrl', ['$scope', Table])
		.controller('logCtrl', ['$scope','$filter', Log])
		.controller('actionBarCtrl', ['$scope', ActionBar]);
})(window,angular);
