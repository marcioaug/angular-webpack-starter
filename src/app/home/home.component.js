/*global require, module*/

var HomeControllerTemplate = require("./home.component.html");

require("./home.component.css");

module.exports = {
    template: HomeControllerTemplate,
    controller: function (HomeService) {
        "use strict";

        this.welcome = HomeService.welcome();

    }
};