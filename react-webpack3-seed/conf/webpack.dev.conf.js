const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseWebpackConfig = require('./webpack.base.conf');

module.exports = merge(baseWebpackConfig, {
    entry: {
        app: [
            'webpack-hot-middleware/client?noInfo=true&reload=true',
            'react-hot-loader/patch',
        ]
    },
    output: {
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunkhash].js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader', 'postcss-loader']
        }]
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
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, '../src/index.html'),
            inject: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        })
    ]
});
