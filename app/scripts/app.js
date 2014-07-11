/**
 * Created by בטי on 07/07/2014.
 */
(function(window,angular){
	console.log('app.js is running');
  angular.module('app',[])
       .controller('todoCtrl',function(){
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
            	}
        })
})(window,angular);