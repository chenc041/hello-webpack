const postcssAdaptive = require('postcss-adaptive');

module.exports = {
  plugins: [
    require('precss'),
    postcssAdaptive({
      rootValue: 75,
      autoRem: true,
    }),
    require('cssnano')({
      preset: 'default',
    }),
  ],
};
