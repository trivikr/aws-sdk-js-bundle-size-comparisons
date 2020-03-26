/* eslint-disable */
const glob = require("glob");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const entryArray = glob.sync("./src/*.js");

module.exports = {
  entry: entryArray.reduce((acc, item) => {
    const name = item.replace("./src/", "").replace(".js", "");
    acc[name] = item;
    return acc;
  }, {}),

  output: {
    filename: "[name].js",
    libraryTarget: "commonjs"
  },

  // Resolve .ts and .js extensions
  resolve: {
    extensions: [".js"]
  },

  // Target node
  target: "node",

  // Set the webpack mode
  mode: "development",
  // mode: process.env.NODE_ENV || "production",

  plugins: [new CleanWebpackPlugin()]
};
