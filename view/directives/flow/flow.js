var app = angular.module('flow', ['ngMaterial']);

app.directive('flow', function () {
    return {
        replace: 'true',
        templateUrl: '/view/directives/flow/flow.html',
        link: function ($scope, $element, $attrs) {
            
        }
    };
});