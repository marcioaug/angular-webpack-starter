/*global describe, it, expect, beforeEach, require, inject, afterEach*/

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

describe("HomeService", function() {
    "use strict";

    var homeService;
    var $httpBackend;

    beforeEach(angular.mock.module("home"));

    beforeEach(function () {
        inject(function ($injector) {
            homeService = $injector.get("HomeService");
            $httpBackend = $injector.get("$httpBackend");
        });
    });

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it("should be expected response when call get", function () {

        $httpBackend.expectGET("/welcome").respond(200, {
            welcome: "Welcome!"
        });

        var data = {};
        var status = null;

        homeService.get().then(function (response) {
            data = response.data;
            status = response.status;
        });

        $httpBackend.flush();

        expect(status).toEqual(200);
        expect(data.welcome).toEqual("Welcome!");
    });
});