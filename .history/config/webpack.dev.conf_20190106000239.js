const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const common = require('./webpack.common')
module.exports = webpackMerge(common, {
  mode: 'development',
  devServer: {
    port: 8090,
    open: true,
    overlay: true,
    compress: true,
    inline: true,
    noInfo: true,
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin();
  ]
})
