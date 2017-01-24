/*global exports*/

exports.config = {
    allScriptsTimeout: 11000,
    specs: ["../src/e2e/*.e2e.js"],
    capabilities: {
        browserName: "chrome"
    },
    baseUrl: "http://localhost:3000/",
    framework: "jasmine",
    jasmineNodeOpts: {
        showTiming: true,
        showColors: true,
        isVerbose: false,
        includeStackTrace: false,
        defaultTimeoutInterval: 400000
    },
    directConnect: true

};