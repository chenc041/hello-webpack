const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = webpackMerge(common, {
  mode: 'production',
  output: {
    publicPath: './public',
  },
  module: {
    rules: {
      test: /\.(css|less)/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'postcss-loader', 'less-loader'],
      }),
    },
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: false,
    }),
    new ExtractTextPlugin('index.[hash].css'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
});
