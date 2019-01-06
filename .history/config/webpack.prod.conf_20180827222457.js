const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const common = require('./webpack.common')
module.exports = webpackMerge(common, {
  mode: 'production',
  output: {
    publicPath: './public'
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: false
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
})
