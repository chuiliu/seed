const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: [
            path.resolve(__dirname, '../src/index.js')
        ],
        vendor: ['react', 'react-dom', 'react-router-dom', 'redux', 'react-redux']
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        // publicPath: '/'  // todo
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                name: '[name].[ext]',
                limit: 10000,
                outputPath: 'img/',
            }
        }, {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                outputPath: 'fonts/'
            }
        }]
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: path.resolve(__dirname, '../'),
        })
    ]
};
