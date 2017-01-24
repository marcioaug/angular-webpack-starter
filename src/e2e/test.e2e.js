/*global describe, beforeEach, browser, angular, it, expect*/

describe("angularjs homepage todo list", function () {
    "use strict";

    beforeEach(function () {
        browser.addMockModule("httpMocker", function () {
            angular.module("httpMocker", ["ngMockE2E"]).run(
                function ($httpBackend) {
                    $httpBackend.whenGET(
                        "http://localhost:8080/"
                    ).respond(201);
                }
            );
        });
    });

    it("should add a todo", function () {
        browser.get("/");
        expect(browser.getTitle()).toBe("Angular With Webpack");
    });

});