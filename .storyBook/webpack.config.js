const path = require("path");

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.scss$/,
    use: ["vue-style-loader", "css-loader", "sass-loader"],
    include: path.resolve(__dirname, "../"),
  });
  return config;
};
