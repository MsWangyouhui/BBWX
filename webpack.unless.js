'use strict'


const HtmlWebpackPlugin=require("html-webpack-plugin");
const webpack = require('webpack');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


const config = {
  entry: ['./public/index.js'],
  // enter:{
  //   app: './public/index.js'
  // },
  output: {
    path: path.resolve(__dirname, '../index/'),
    filename: '[name].[hash].js',
  },
  module: {
    rules:[
      {
        test: /\.js$/,
        include:[path.resolve(__dirname,'/')],
        loader: 'babel-loader',
        exclude: [new RegExp(`node_modules\\${path.sep}(?!vue-bulma-.*)`)]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options:{
          loaders: {
          //  styl:"vue-style-loader!css-loader!stylus-loader!less-loader",
          css: ExtractTextPlugin.extract({
           use: 'css-loader',
           fallback: 'vue-style-loader' // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
          })
          }
//          extractCSS: true
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name:  path.posix.join('static', 'img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        name: path.posix.join('static', 'media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        name: path.posix.join('static', 'fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  resolve: {
    extensions: ['.vue','.js', 'json']
  },
};

const vuxLoader = require('vux-loader')
module.exports = vuxLoader.merge(config, {
  plugins: ['vux-ui', 'progress-bar', 'duplicate-style','inline-manifest']
})
// module.exports = config;
