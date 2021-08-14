const path                            = require('path')
const MiniCssExtractPlugin            = require('mini-css-extract-plugin')
const HtmlWebpackPlugin               = require('html-webpack-plugin')

const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../built'),
  assets: 'assets/'
}

module.exports = {
  target: 'web',
  externals: {
    paths: PATHS
  },
  entry: {
    main: `${PATHS.src}/index.tsx`,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  output: {
    filename: `${PATHS.assets}js/[name].[contenthash].js`,
    path: PATHS.dist
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      {
        test: /\.ts?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          }, 
          {
            loader: 'postcss-loader',
            options: { 
              sourceMap: true, 
              config: { path: `./postcss.config.js` }
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      '~': PATHS.src
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].[contenthash].css`,
    }),
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/index.html`,
      filename: `index.html`,
      minify: true,
      cache: true,
    })
  ],
}
