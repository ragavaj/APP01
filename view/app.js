var app = angular.module("sMs", ['flow', 'cell']);
app.controller("sMsCtrl", function ($scope) {
    $scope.name = "sMessaging";

    $scope.flow = {
        "1": {
            "label": "Please specify the campaign -> ",
            "type": "text",
            "id": "campaignId"
        }
    }
});