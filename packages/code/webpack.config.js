/* eslint-disable */
const path = require("path");
const glob = require("glob");

// Bug https://github.com/webpack/webpack/issues/4453
const entryArray = glob
  .sync("./src/*.js")
  .map((item) => item.replace("./src/", "").replace(".js", ""));

module.exports = entryArray.map((name) => ({
  entry: {
    [name]: `./src/${name}.js`,
  },

  output: {
    filename: "[name].js",
    libraryTarget: "commonjs",
    path: path.resolve(__dirname, "dist"),
  },

  // Resolve .ts and .js extensions
  resolve: {
    extensions: [".js"],
  },

  // Target node
  target: "node",

  // Set the webpack mode
  mode: process.env.NODE_ENV || "production",
}));
