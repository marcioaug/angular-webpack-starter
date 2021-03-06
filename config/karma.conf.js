/*global module, require*/

var webpackConfig = require("./webpack.test");

module.exports = function (config) {
    "use strict";

    var _config = {
        basePath: "",
        frameworks: ["jasmine"],
        files: [
            {pattern: "./config/karma-test-shim.js", watched: false}
        ],
        preprocessors: {
            "./config/karma-test-shim.js": ["webpack", "sourcemap"]
        },
        webpack: webpackConfig,
        webpackMiddleware: {
            stats: "erros-only"
        },
        webpackServer: {
            noInfo: true
        },
        reporters: ["progress"],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ["PhantomJS"],
        singleRun: true
    };

    config.set(_config);

};