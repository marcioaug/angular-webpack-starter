/*global require, __dirname, exports*/

var path = require("path");
var _root = path.resolve(__dirname, "..");

function root(args) {
    "use strict";
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [_root].concat(args));
}

exports.root = root;