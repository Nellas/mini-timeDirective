var app = angular.module('timeApp').directive('showTime', function() {

    return {
        restrict: 'E',
        template: '<div style="color: red; font-size: 18px; margin: 0 0 25px 0"> {{ date }} </br> {{ time }} </div>',
        link: function(scope, element, attrs){
            var currentTime = new Date();
            scope.date = currentTime.toLocaleDateString();
            scope.time = currentTime.toLocaleTimeString();
        }
    }
});