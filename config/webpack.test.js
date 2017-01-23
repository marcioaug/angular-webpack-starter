/*global require, module*/

var helpers = require("./helpers");

module.exports = {

    devtool: "inline-source-map",

    resolve: {
        extensions: ["", ".js"]
    },

    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: "html"
            },
            {
                test: /.\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: "null"
            },
            {
                test: /\.css$/,
                loader: "null"
            }
        ]
    }
};