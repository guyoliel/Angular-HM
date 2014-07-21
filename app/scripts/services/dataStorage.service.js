(function(){

    function DataStorage($window) {
        this.get = function (str) {
            if (!localStorage.getItem(str)) {
                $window.localStorage.setItem(str, angular.toJson(new Array()));
            }
            return JSON.parse(localStorage.getItem(str));
        };

        this.set = function (str,items) {
            $window.localStorage.setItem(str, angular.toJson(items));
        };

        
    }

    angular.module('app')
        .service('dataStorage',DataStorage);
})();
