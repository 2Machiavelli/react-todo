const merge                    = require('webpack-merge')
const baseWebpackConfig        = require('./webpack.base.conf')
const WebpackBundleSizeAnalyzerPlugin = require('webpack-bundle-size-analyzer').WebpackBundleSizeAnalyzerPlugin

const buildWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  output: {
    publicPath: './',
    clean: true
  },
  devtool: 'source-map',
  plugins: [
    new WebpackBundleSizeAnalyzerPlugin('./bundle_size.txt'),
  ]
})

module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig)
})
