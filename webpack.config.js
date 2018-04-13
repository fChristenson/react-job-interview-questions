const path = require("path");

module.exports = {
  entry: {
    junior: path.join(__dirname, "src", "public", "js", "junior.js"),
    senior: path.join(__dirname, "src", "public", "js", "senior.js")
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.[name].js"
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
