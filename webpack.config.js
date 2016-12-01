var webpack = require('webpack')
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin")
var path = require('path')
var loaders = require('./webpack.loaders')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var pkg = require('./package.json')
var BUILD_DIR = path.resolve(__dirname, 'dist')
var APP_DIR = path.resolve(__dirname, 'app')

function excludeOfVendors(name, vendors) {
  return vendors.indexOf(name) === -1
}
var _toExclude = ['babel-core', 'webpack', 'react-icons']



var config = {
  entry: {
      app: ['react-hot-loader/patch', APP_DIR + '/index.js'],
      vendors: Object.keys(pkg.dependencies)
                     .filter(name => excludeOfVendors(name, _toExclude))
    },
    resolve: { alias: {} },
    plugins: [
  		new webpack.NoErrorsPlugin(),
  		new webpack.HotModuleReplacementPlugin(),
      new CommonsChunkPlugin('vendors', 'vendors.min.js'),
  		new HtmlWebpackPlugin({
        title: "demo",
        inject: false,
  			template: APP_DIR + '/index.html',
  		})
  	],

    output: {
      path: BUILD_DIR,
      filename: '[name].min.js',
      publicPath: '/' // With html-webpack-plugin is necesary to make absolute paths
    },

    devServer: {
      contentBase: "./app",
  		// do not print bundle build stats
  		noInfo: true,
  		// enable HMR
  		hot: true,
  		// embed the webpack-dev-server runtime into the bundle
  		inline: true,
  		// serve index.html in place of 404 responses to allow HTML5 history
  		historyApiFallback: true,
  		port: 8083,
      host: 'localhost',
    },

    module: {
      noParse: [],
      loaders
    }
  };

  module.exports = config;
