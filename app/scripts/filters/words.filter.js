(function(){
    function Words(log){
        log.debug('words filter is running');
        return function (input, words) {
            if (input) {
                var inputWords = input.split(' ');
                if (inputWords.length > words) {
                    input = inputWords.slice(0, words).join(' ') + '...';
                }
            }
            return input;
        };
    }
angular.module('app')
    .filter('words',['$log', Words]);
})();
