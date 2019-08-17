// @ts-nocheck
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

const config = {
  entry: path.resolve(__dirname, '../src/index'),
  output: {
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
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
      {
        test: /\.(ts|tsx|jsx|js)$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'ts-loader',
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.jsx', '.ts', '.js'],
  },
  plugins: [
    new HardSourceWebpackPlugin({
      info: {
        mode: 'none',
        level: 'debug',
      },
    }),
    new webpack.HashedModuleIdsPlugin(),
    new HtmlWebpackPlugin({
      inject: 'body',
      title: 'webpack learn',
      template: path.resolve(__dirname, '../index.html'),
    }),
  ],
};

module.exports = config;
