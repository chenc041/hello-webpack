const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const common = require('./webpack.common')
module.exports = webpackMerge(common, {
  mode: 'development',
  module: {
    rules: {
      test: /\.(css|less)/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'postcss-loader', 'less-loader'],
      }),
    },
  },
  devServer: {
    hot: true,
    port: 8090,
    open: true,
    inline: true,
    noInfo: true,
    overlay: true,
    compress: true,
    publicPath: '/',
    contentBase: './dist',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})
