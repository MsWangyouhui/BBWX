
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpack = require("webpack");
var express = require('express')
var hotMiddleWare = require('webpack-hot-middleware');
var opn = require('opn');
var app = express()
var webpackConfig = require('./webpack.config.js');
var unless = require('../webpack.unless.js');
var merge = require('webpack-merge');
var configunlike = merge( unless, webpackConfig);
var compiler = webpack(configunlike);
app.use(require("webpack-dev-middleware")(compiler, {
  publicPath: configunlike.output.publicPath,
  stats: {
  colors: true,
  chunks: false
  }
}));
app.use(hotMiddleWare(compiler));
console.log('> Starting dev server...');
app.use(express.static('../index'));
app.get('/', function(req, res, next){
    next();
});

const posthttp=7777
console.log('http://localhost:'+posthttp+'。。。。');
app.listen(posthttp,()=>{

  opn('http://localhost:'+posthttp+'');
});
