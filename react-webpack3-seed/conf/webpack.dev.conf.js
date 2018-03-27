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
        }]
    },
    devServer: {
        port: 8080,
        contentBase: path.resolve(__dirname, '../dist'),
        historyApiFallback: true,
        host: '0.0.0.0',
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
