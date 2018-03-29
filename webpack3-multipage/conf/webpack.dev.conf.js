const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

module.exports = merge(baseWebpackConfig, {
    output: {
        filename: '[name].[hash].js',
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: '../dist',
        watchContentBase: true,
        // 当访问的文件不存在时, 返回根目录下的index.html
        historyApiFallback: true,
        inline: true,
        hot: true,
        open: false,
        host: '0.0.0.0',
        port: 8080
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
});
