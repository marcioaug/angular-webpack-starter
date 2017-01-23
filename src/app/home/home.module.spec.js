/*global describe, it, expect, beforeEach, require, inject*/

var angular = require("angular");

require("./home.module");

describe("HomeComponent", function () {
    "use strict";

    var $componentController;

    beforeEach(angular.mock.module("home"));

    beforeEach(inject(function (_$componentController_) {
        $componentController = _$componentController_;
    }));

    it("should expose a object", function () {
        var ctrl = $componentController("homeComponent");
        expect(ctrl.welcome).toBe("Welcome!");
    });

});
