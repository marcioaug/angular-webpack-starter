/*global require, module */

var angular = require("angular");

var HomeController = require("./home.controller");
var HomeService = require("./home.service");

module.exports = angular.module("home", [])
    .factory("HomeService", HomeService)
    .controller("HomeController", HomeController);