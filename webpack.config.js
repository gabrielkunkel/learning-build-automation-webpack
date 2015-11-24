/**
 * Created by gabrielkunkel on 10/13/15.
 */
"use strict";

var path = require('path');

module.exports = {
  context: path.resolve('client'),
  entry: ["./app"],
  output: {
    path: path.resolve('./client/dist/'),
    publicPath: "/dist/assets/js/",
    filename: "bundle.js"
  },

  devServer: {
    contentBase: 'client'
  },

  module: {
    preLoaders: [
      {
        test: /\.(es6|js)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.(es6|js)$/,
        exclude: /node_modules/,
        loader: 'ng-annotate-loader'
      }
    ],
    loaders: [
      {
        test: /\.(es6|js)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test:/\.css$/,
        exclude: /node_module/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: "raw-loader"
      }
    ]
  },

  resolve: {
      extensions: ['', '.js', '.es6']
  }
}