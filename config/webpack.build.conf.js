const merge                           = import("webpack-merge")
const baseWebpackConfig               = import("./webpack.base.conf")
const WebpackBundleSizeAnalyzerPlugin = import("webpack-bundle-size-analyzer").WebpackBundleSizeAnalyzerPlugin

const buildWebpackConfig = merge(baseWebpackConfig, {
	mode: "production",
	output: {
		publicPath: "./",
		clean: true
	},
	devtool: "source-map",
	plugins: [
		new WebpackBundleSizeAnalyzerPlugin("./bundle_size.txt"),
	]
})

module.exports = new Promise((resolve) => {
	resolve(buildWebpackConfig)
})
