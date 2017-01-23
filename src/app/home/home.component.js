/*global require, module*/

var HomeControllerTemplate = require("./home.component.html");

require("./home.component.css");

module.exports = {
    template: HomeControllerTemplate,
    controller: ["HomeService", function (homeService) {
        "use strict";

        this.welcome = homeService.welcome();

    }]
};