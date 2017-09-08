let webpack = require("webpack");
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let devMiddleWare = require('webpack-dev-middleware');
let hotMiddleWare = require('webpack-hot-middleware');
 let baseConfig = require('./webpack.base.config');

let devOption = {
entry: {
app:[
'webpack-hot-middleware/client',
'../public/index.js'
],
},
output: {
path: '/',
// publicPath: '/'
},
plugins: [
// new webpack.optimize.OccurenceOrderPlugin(),
// Webpack 2.0 fixed this mispelling
// new webpack.optimize.OccurrenceOrderPlugin(),

new webpack.HotModuleReplacementPlugin(),
new webpack.NoErrorsPlugin(),
new HtmlWebpackPlugin({
template: '../index/index.html'
}),
]
}

module.exports = function(app){
let webpackconfig = Object.assign({}, baseConfig, devOption);//利用es6的特性把一个对象复制另一个
//里头没有的key建立性的对象；

console.log(baseConfig);

var compiler = webpack(webpackconfig);// console.log(compiler);
app.use(devMiddleWare(compiler,{
publicPath: webpackconfig.output.publicPath,
stats: {
colors: true,
chunks: false
}
}));
app.use(hotMiddleWare(compiler));
return app;
}
