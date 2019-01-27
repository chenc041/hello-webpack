const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { TS } = process.env;
const config = {
  entry: path.resolve(__dirname, '../src/index'),
  output: {
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
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
    extensions: ['.tsx', '.jsx', '.js'],
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new HtmlWebpackPlugin({
      inject: 'body',
      title: 'webpack learn',
      template: path.resolve(__dirname, '../index.html'),
    }),
  ],
};
if (TS === 'true') {
  config.module.rules.push({
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  });
} else {
  config.module.rules.push({
    test: /\.jsx?$/,
    use: ['babel-loader'],
    exclude: /node_modules/,
  });
}

module.exports = config;
