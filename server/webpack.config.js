var webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin")


module.exports = {
  context: __dirname,
  entry:{
    index: [
      // Add the client which connects to our middleware
      // You can use full urls like 'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr'
      // useful if you run your app from another point like django
      'webpack-hot-middleware/client',
      // And then the actual application
      '../public/index.js'
    ],
  },
/*  output: {
    path: '/',
    filename: 'bundle.js'
  },*/


  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  }),
    // ,
   new ExtractTextPlugin("style.css"),
  //  require('autoprefixer')({browsers:'ios >= 8'}) ,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
    template: '../index/index.html'
    }),
  ],
};
