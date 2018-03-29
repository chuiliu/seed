var path = require('path');
var express = require('express');
var webpack = require('webpack');

var webpackConfig = require('./webpack.dev.conf');
var config = require('./config');
var apis = require('../mock/api');

var port = process.env.PORT || config.dev.port;

var app = express();
var compiler = webpack(webpackConfig);

var devMiddleware = require('webpack-dev-middleware')(compiler, {
    // publicPath必须和webpack配置一致
    publicPath: webpackConfig.output.publicPath,
    // quiet: true，禁用所有控制台日志输出
    quiet: true
});

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
    log: false,
    heartbeat: 2000
});

compiler.plugin('compilation', function(compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function(data, cb) {
        hotMiddleware.publish({ action: 'reload' });
        cb();
    });
});

Object.keys(apis).forEach(function(url) {
    var f = apis[url];
    app.use(url, f);
});

app.use(require('connect-history-api-fallback')({ index: 'index.html' }));

app.use(devMiddleware);

app.use(hotMiddleware);

// todo
// var staticPath = path.posix.join('/', 'static');
// app.use(staticPath, express.static('./static'));

var server = app.listen(port);
console.log(`> Server listening at http:localhost:${port}`);
