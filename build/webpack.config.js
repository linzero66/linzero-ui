const path = require("path");
const merge = require("webpack-merge");
const webpackBaseConfig = require("./webpack.base.js");

module.exports = merge(webpackBaseConfig, {
    entry: {
        main: path.resolve(__dirname, "../src/index.js")
    },
    output: {
        path: path.resolve(__dirname, "../lib"),
        filename: "linzero-ui.js",
        library: "linzero-ui",
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["vue-style-loader", "css-loader", "sass-loader"]
            }
        ]
    }
})