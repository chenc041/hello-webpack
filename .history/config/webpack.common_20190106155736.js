const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    filename: 'index.[hash].js',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 15000,
              name: './assets/[name].[hash:4].[ext]',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.css', '.less', '.json'],
  },
  plugins: [
    new htmlWebpackPlugin({
      inject: 'body',
      title: 'webpack learn',
      template: path.resolve(__dirname, '../index.html'),
    }),
  ],
};
