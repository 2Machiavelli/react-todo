const merge               = require("webpack-merge")
const baseWebpackConfig   = require("./webpack.base.conf")
const ESLintPlugin        = require("eslint-webpack-plugin")

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: "development",
  output: {
    publicPath: "/"
  },
  devServer: {
    contentBase: baseWebpackConfig.externals.paths.dist,
    port: 8080,
    historyApiFallback: true,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  plugins: [
    new ESLintPlugin({
      extensions: ["ts", "js", "tsx", "vue"]
    }),
  ]
})

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig)
})
