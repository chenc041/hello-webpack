const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const common = require('./webpack.common')
module.exports = webpackMerge(common, {
  mode: 'development',
  devServer: {
    hot: true,
    port: 8090,
    open: true,
    inline: true,
    noInfo: true,
    overlay: true,
    compress: true,
    publicPath: './dist',
    contentBase: './dist',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})
