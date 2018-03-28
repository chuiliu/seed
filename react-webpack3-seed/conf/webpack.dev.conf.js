const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseWebpackConfig = require('./webpack.base.conf');

module.exports = merge(baseWebpackConfig, {
    output: {
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunkhash].js'
    },
    devtool: 'inline-source-map',
    // devServer: {
    //     port: 8080,
    //     contentBase: path.resolve(__dirname, '../dist'),
    //     historyApiFallback: true,
    //     host: '0.0.0.0',
    //     hot: true,

    //     proxy: {
    //         '/api/*': {
    //             target: 'http://localhost:3000',
    //             secure: false
    //         }
    //     },
    // },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        })
    ]
});
