const path = require("path");

module.exports = {
  entry: path.join(__dirname, "src", "public", "js", "junior.js"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.junior.js"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /.+\.js/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["babel-preset-react"]
        }
      }
    ]
  }
};
