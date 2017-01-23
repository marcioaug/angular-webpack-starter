/*global require, module*/

require("angular");
require("angular-mocks");

var appContext = require.context("../src", true, /\.spec\.js/);
appContext.keys().forEach(appContext);

