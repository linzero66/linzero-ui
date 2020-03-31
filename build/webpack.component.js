const path = require("path")
const merge = require("webpack-merge");
const webpackBaseConfig = require("./webpack.base.js");

module.exports = merge(webpackBaseConfig, {
    entry: {
        "ml-button": path.resolve(__dirname, "../src/components/button/index.js")
    },
    output: {
        path: path.resolve(__dirname, "../lib"),
        filename: "[name]/index.js",
        libraryTarget: "umd"
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: ["vue-style-loader", "css-loader", "sass-loader"]
        }
        ]
    }
})