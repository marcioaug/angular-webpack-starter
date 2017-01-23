/*global require, exports */

var angular = require("angular");
var AppRoutes = require("./app.routes");
var AppComponent = require("./app.component");

require("angular-ui-router");

require("./home/home.module");


angular.module("app", [
    "ui.router",
    "home"
])
    .component("appComponent", AppComponent)

    .config(function ($stateProvider, $urlRouterProvider) {
        "use strict";

        $urlRouterProvider.otherwise("/not-found");

        AppRoutes.forEach(function (state) {
            $stateProvider.state(state);
        });
    });

