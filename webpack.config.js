const webpack = require('webpack');
const path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const APP_DIR = path.resolve(__dirname, 'Application');
const BUILD_DIR = path.resolve(__dirname, 'Public');
const ENTRY = path.join(APP_DIR, '/index.js');


const isDev = process.env.NODE_ENV ? false : true;

const config = {
    entry:    [
    ENTRY
  ],
  output: {
    path: BUILD_DIR,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.(js|jsx)$/,
        include: APP_DIR,
        loader : 'babel-loader'
      },
      {
        test: /\.css$/,
        include: APP_DIR,
        use: isDev ? [
          'style-loader', 'css-loader' ] :
          ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader"
            })
      },
      {
        test: /\.(jpg|jpeg|png|svg)$/,
        include: APP_DIR,
        use: 'file-loader?name=[name].[ext]&publicPathh=assets/'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin(`style.css`)
  ]
}
if(isDev) {
  config.entry.unshift('webpack-hot-middleware/client')
  config.plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
    title: 'Redux-Practice',
    xhtml: true,
    inject: false,
    template: require('html-webpack-template'),
    appMountId: 'root-container'
  })]
  config.target = 'web'
}
module.exports = config;
