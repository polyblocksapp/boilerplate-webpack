const config = require("./webpack.config")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  ...config,
  mode: "development",
  devServer: {
    hot: false,
    port: 3000,
    open: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      inject: "body",
      publicPath: "./"
    })
  ],
}