const path = require("path");
const merge = require("webpack-merge");
const glob = require("glob");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpackBaseConfig = require("./webpack.base.js");
const entry = Object.assign(
  {},
  glob
    .sync("./src/components/**/index.js")
    .map((item) => {
      return item.split("/")[3];
    })
    .reduce(MegerPath, {}),
  {}
);

// .reduce(MegerPath)

function MegerPath(acc, cur) {
  acc[`ml-${cur}`] = path.resolve(
    __dirname,
    `../src/components/${cur}/index.js`
  );

  return { ...acc };
}

module.exports = merge(webpackBaseConfig, {
  entry: entry,
  output: {
    path: path.resolve(__dirname, "../lib"),
    filename: "[name]/index.js",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "theme/[name].css",
    }),
  ],
});
