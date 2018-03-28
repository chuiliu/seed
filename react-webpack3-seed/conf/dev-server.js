var path = require('path');
var express = require('express');
var webpack = require('webpack');

var webpackConfig = require('./webpack.dev.conf');
var config = require('./config');

var port = process.env.PORT || config.dev.port;

var app = express();
var compiler = webpack(webpackConfig);

var devMiddleware = require('webpack-dev-middleware')(compiler, {
    // publicPath: path.resolve(__dirname, '../dist'),
    quiet: true
});

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
    log: false,
    heartbeat: 2000
});

// app.use(require('connect-history-api-fallback')());

app.use(devMiddleware);

app.use(hotMiddleware);

var indexPath = path.resolve(__dirname, '../dist/index.html');
var staticPath = express.static(path.resolve(__dirname, '../dist'));

app.use('/dist', staticPath);

app.get('/', function(req, res) { res.sendFile(indexPath) });

app.get('/api/*', function(req, res) {
    res.json({
        result: 0,
        data: {
            id: 1000002,
            name: 'my'
        }
    });
});


var server = app.listen(port);
console.log(`> Server listening at http:localhost:${port}`);
