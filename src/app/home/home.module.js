/*global require, module */

var angular = require("angular");

var HomeService = require("./home.service");
var HomeComponent = require("./home.component");
var HomeRoutes = require("./home.routes");

module.exports = angular.module("home", [])
    .factory("HomeService", HomeService)

    .component("homeComponent", HomeComponent)

    .config(function ($stateProvider) {
        "use strict";
        HomeRoutes.forEach(function (state) {
            $stateProvider.state(state);
        });
    });