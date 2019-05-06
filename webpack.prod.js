const merge = require('webpack-merge');
const common = require('./webpack.config.js');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  performance: {
    hints: false
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true,
      parallel: true,
      exclude: [/\.min\.js$/gi] // skip pre-minified libs
    }),
    new webpack.optimize.AggressiveSplittingPlugin({
      minSize: 20000,
      maxSize: 30000,
    })
  ]
});
