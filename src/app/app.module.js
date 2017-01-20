/*global require, exports */

var angular = require("angular");

require("angular-ui-router");

require("./home/home.module");
var homeTemplate = require("./home/home.html");

angular.module("app", [
    "ui.router",
    "home"
])
    .config(function ($stateProvider, $urlRouterProvider) {
        "use strict";

        $urlRouterProvider.otherwise("/not-found");

        $stateProvider.state("home", {
            url: "/home",
            templateUrl: homeTemplate,
            controller: "HomeController"
        });
    });

