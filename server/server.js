


let express = require('express');
let webpack = require("webpack");
const fs = require('fs');
var opn = require('opn');
let app = express()
let port;


let webpackconfig = require('./webpack.dev.config');
webpackconfig(app)
// app.use(express.static('../index'));
app.get('/', function(req, res, next){
    next();
})
app.listen(port || 9999, function(e){
    console.log(`server start at ${port}`);
    // opn('http://localhost:9999');
});
