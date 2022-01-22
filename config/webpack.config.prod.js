const config = require("./webpack.config")
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  ...config,
  mode: "production",
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      cache: false,
      parallel: true,
      sourceMap: false,
      extractComments: 'all',
      terserOptions: {
        keep_classnames: false,
        mangle: true,
        compress: {
            drop_console: true,
        },
        keep_fnames: false,
        output: {
          comments: false,
        },
        format: {
          comments: false,
        },
      },
      extractComments: false,
    })]
  },
  externals: [
    {
      
      p5: 'p5',
      three: 'three',
      '@svgdotjs/svg.js': '@svgdotjs/svg.js',
    }
  ],
}