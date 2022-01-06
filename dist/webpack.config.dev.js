"use strict";

var path = require("path");

var HtmlWebPackPlugin = require("html-webpack-plugin"); // const CopyWebpackPlugin = require("copy-webpack-plugin");


module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
  },
  resolve: {
    extensions: [".js"]
  },
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    }]
  },
  plugins: [new HtmlWebPackPlugin({
    inject: true,
    template: "./public/index.html",
    filename: "./index.html"
  }) // new CopyWebpackPlugin({
  //   patterns: [
  //     { from: "./src/styles/dist/styles.css", to: "" },
  //   ],
  // }),
  ],
  devServer: {
    "static": {
      directory: path.join(__dirname, "dist")
    },
    compress: true,
    port: 3006,
    open: true
  }
};