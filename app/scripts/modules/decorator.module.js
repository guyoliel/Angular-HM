(function(){

  angular.module('decorator',[])
      .config(function($provide){
          console.log('decorating module is running...')
          $provide.decorator('$log', function($delegate){
                $delegate.debug = function(msg) {
                    console.log((new Date).toLocaleTimeString() +' '+msg);
                }
                return $delegate;
          })

      })
})();
