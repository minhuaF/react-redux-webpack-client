const path = require('path')
const fs = require('fs')

var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: {
    main: [
      './src/index.js'
    ],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].chunk.js',
    publicPath: ''
  },
  resolve: {
    extensions: ['.js', '.jsx', '.less']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [{
          loader: "babel-loader"
        }]
      },
      {
        test: /\.(png|jpg|gif)$/,
        exclude: /node_modules/,
        loaders: [{
          loader: "url-loader",
          options: {
            name: '[name].[ext]',
            // limit: 8192,
          }
        }]
      },
      {
        test: /\.(less|css)$/,
        loaders: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              minimize: true,
              importLoaders: 2,
              modules: true, // css 模块化
              localIdentName: '[name]_[local]-[hash:base64:5]',
              url: false
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('postcss-import')(),
                  require('autoprefixer')({
                    browsers: ['last 10 versions'],
                    remove: false
                  }),
                  require('postcss-pxtorem')({
                    rootValue: 100,
                    propWhiteList: []
                  })
                ]
              }
            }
          },
          {
            loader: 'less-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: true
    })
  ]
}

module.exports = config