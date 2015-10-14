/**
 * Created by gabrielkunkel on 10/13/15.
 */

"use strict";

module.exports = {
  entry: ["./client/app.js", "./client/utils.js"],
  output: {
    filename: "./client/dist/bundle.js"
  },

  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'jshint-loader'
    }],
    loaders: [{
      test: /\.es6$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }]
  },

  resolve: {
    extensions: ['', '.js', '.es6']
  }
};

//# sourceMappingURL=webpack.config-compiled.js.map