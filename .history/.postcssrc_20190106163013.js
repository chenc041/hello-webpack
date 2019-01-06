const postcssAdaptive = require('postcss-adaptive')
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    require('precss'),
    autoprefixer({
      "browsers": [
        "ie >= 9",
        "ff >= 30",
        "chrome >= 34",
        "safari >= 7",
        "opera >= 23"
      ]
    }),
    postcssAdaptive({
      rootValue: 75,
      autoRem: true
    }),
    require('cssnano')({
      preset: 'default',
  }),

  ]
}
