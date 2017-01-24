/*global module*/

module.exports = ["$http", function ($http) {
    "use strict";

    return {
        welcome: function () {
            return "Welcome!";
        },

        get: function () {
            return $http({
                method: "GET",
                url: "/welcome"
            });
        }
    };

}];
