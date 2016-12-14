var app = angular.module('cell', ['ngMaterial', 'ngRightClick']);

app.directive('cell', function () {
    return {
        replace: 'true',
        templateUrl: '/view/directives/cell/cell.html',
        link: function ($scope, $element, $attrs) {
            $scope.width = 100;
            $scope.height = 100;
            $scope.table = {
                width: $scope.width,
                height: $scope.height,
                rows: []
            }
            $scope.showContextMenu = function() {
                alert("contextMenu");
            }
        }
    };
});