const path = require("path");
const webpack = require("webpack");
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: [/node_modules/],
        use: [
          {
            loader: "babel-loader",
            options: { presets: ["env"] }
          }
        ]
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }

      // Loaders for other file types can go here
    ]
  },
  context: path.resolve(__dirname, "src"),
  entry: {
    app: "./app.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  }
};
