const path = require('path');
const fs = require('fs');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

let HTMLWebpackPlugins = [];
let entries = {};
let htmlPath = path.resolve(__dirname, '../src/js/page');
let htmlFiles = fs.readdirSync(htmlPath);

htmlFiles.forEach((file) => {
    if (/\.js$/.test(file)) {
        let filename = file.replace(/\.js$/, '');

        const htmlWebpackPlugin = new HTMLWebpackPlugin({
            filename: `${filename}.html`,
            template: path.resolve(__dirname, `../src/template/${filename}.html`),
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            },
            chunks: [filename, 'vendor']
        });

        HTMLWebpackPlugins.push(htmlWebpackPlugin);
        entries[filename] = path.resolve(__dirname, `../src/js/page/${filename}.js`);
    }
});

module.exports = {
    entry: entries,
    output: {
        path: path.resolve(__dirname, '../dist')
    },
    devtool: 'cheap-module-source-map',
    module: {
        rules: [{
            test: /\.css$/,
            exclude: /node_modules/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                    options: {
                        minimize: true,
                    }
                }, {
                    loader: 'postcss-loader'
                }]
            })
        }, {
            test: /\.js$/,
            exclude: /node_modules|lib/,
            enforce: 'pre',
            loader: 'eslint-loader',
            options: {
                fix: true,
                emitWarning: true,
            }
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                name: '[name].[ext]',
                outputPath: 'img/',
                limit: 10000,
            }
        }, {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader'
        }]
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: path.resolve(__dirname, '../'),
        }),
        new ExtractTextPlugin({
            filename: 'css/[name].css'
        }),
        ...HTMLWebpackPlugins
    ]
};
