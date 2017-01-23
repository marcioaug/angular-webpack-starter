/*global describe, it, expect, beforeEach, require, inject*/

var angular = require("angular");

require("./app.module");

describe("AppComponent", function () {
    "use strict";

    var $componentController;

    beforeEach(angular.mock.module("app"));

    beforeEach(inject(function (_$componentController_) {
        $componentController = _$componentController_;
    }));

    it("should expose a `hero` object", function () {
        var ctrl = $componentController("appComponent");
        expect(ctrl).toBeDefined();
    });

});