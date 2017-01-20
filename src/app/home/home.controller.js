/*global module*/

module.exports = ["$scope", "HomeService", function ($scope, homeService) {
    "use strict";

    $scope.welcome = homeService.welcome();
}];
