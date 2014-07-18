(function(){
    console.log('words filter is running');
    function Words(){
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
    .filter('words', Words);
})();
