const webpack = require('webpack');
const chalk = require('chalk');
const webpackMerge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
const common = require('./webpack.common');

module.exports = webpackMerge(common, {
  mode: 'production',
  devtool: 'inline-source-map',
  output: {
    filename: '[name].[hash].js',
    publicPath: './',
  },
  module: {
    rules: [
      {
        test: /\.(css|less)/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
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
        }),
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  stats: 'errors-only',
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true,
    }),
    new ExtractTextPlugin('index.[chunkHash].css'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new CompressionPlugin({
      filename: '[path].gz[query]',
      test: /\.js(\?.*)?$/i,
      algorithm: 'gzip',
      deleteOriginalAssets: true,
    }),
    new ProgressBarPlugin({
      format: `build [:bar]  ${chalk.green.bold(':percent')}`,
      clear: false,
      width: 30,
    }),
    new BundleAnalyzerPlugin(),
  ],
});
