const path = require("path");

module.exports = {
  mode: "none",
  devtool: "source-map",
  entry: path.join(__dirname, "./src/index.mjs"),
  target: "node",
  resolve: {
    extensions: [".js", ".mjs", ".json"],
  },
  output: {
    libraryTarget: "commonjs",
    path: path.join(__dirname, ".webpack"),
    filename: "[name].js",
  },
};
