const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        path.resolve(__dirname, '../src/index.js')
    ],
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                name: '[name].[ext]',
                limit: 10000,
                // outputPath: 'img/',
            }
        }]
    },
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
        new webpack.HotModuleReplacementPlugin()
    ]
};
