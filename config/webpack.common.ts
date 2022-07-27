import path from 'node:path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import 'webpack-dev-server';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const config: webpack.Configuration = {
  entry: path.resolve(__dirname, '../src/index'),
  output: {
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)/,
        use: [
          process.env.NODE_ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
        exclude: /node_modules/,
      },
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
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '~': path.resolve('src'),
    },
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new webpack.ProgressPlugin({
      activeModules: true,
      entries: true,
      modules: true,
      profile: true,
      dependencies: true,
      dependenciesCount: 10000,
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      title: 'hello-webpack',
      template: path.resolve(__dirname, '../index.html'),
    }),
  ],
};
