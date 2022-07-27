import webpack from 'webpack';
import { merge } from 'webpack-merge';
import { config } from './webpack.common';
export default merge(config, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    port: 'auto',
    open: true,
    client: {
      logging: 'info',
      progress: true,
    },
  },
  stats: {
    modules: false,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
