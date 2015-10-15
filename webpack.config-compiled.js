/**
 * Created by gabrielkunkel on 10/13/15.
 */
"use strict";

var path = require('path');

module.exports = {
  context: path.resolve('client'),
  entry: ["./app", "./utils"],
  output: {
    path: path.resolve('/dist/js/'),
    publicPath: "/dist/assets/js/",
    filename: "bundle.js"
  },

  devServer: {
    contentBase: 'client'
  },

  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'jshint-loader'
    }],
    loaders: [{
      test: /\.(es6|js)$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }, {
      test: /\.css$/,
      exclude: /node_module/,
      loader: "style-loader!css-loader"
    }, {
      test: /\.html$/,
      exclude: /node_modules/,
      loader: "raw-loader"
    }]
  },

  resolve: {
    extensions: ['', '.js', '.es6']
  }
};

//# sourceMappingURL=webpack.config-compiled.js.map