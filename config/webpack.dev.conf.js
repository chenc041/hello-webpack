const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const common = require('./webpack.common');

module.exports = webpackMerge(common, {
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(css|less)/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]--[hash:base64:5]',
            },
          },
          'postcss-loader',
          'less-loader',
        ],
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    hot: true,
    port: 8090,
    open: true,
    quiet: true,
    inline: true,
    noInfo: true,
    overlay: true,
    publicPath: '/',
    contentBase: './dist',
    clientLogLevel: 'none',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ['You application is running here http://localhost:8090'],
        notes: ['U can build u app by yarn build or npm run build'],
      },
    }),
  ],
});
