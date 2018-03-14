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
            inject: true,
            chunks: [filename, 'vendor']
            // 压缩html
            // minify: {
            //     removeComments: true,
            //     collapseWhitespace: true,
            //     removeAttributeQuotes: true
            // },
        });

        HTMLWebpackPlugins.push(htmlWebpackPlugin);
        entries[filename] = path.resolve(__dirname, `../src/js/page/${filename}.js`);
    }
});

module.exports = {
    entry: entries,
    output: {
        path: path.resolve(__dirname, '../dist'),
        hashDigestLength: 8
    },
    devtool: 'cheap-module-source-map',
    module: {
        rules: [{
            test: /\.css$/,
            exclude: /node_modules/,
            // extract-text-webpack-plugin 不支持 HMR. 解决方法：https://github.com/shepherdwind/css-hot-loader
            use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                fallback: 'style-loader',
                // publicPath是css中引入资源的路径，如图片和字体等
                publicPath: '../',
                use: [{
                    loader: 'css-loader',
                    options: {
                        minimize: true,
                    }
                }, {
                    loader: 'postcss-loader'
                }]
            }))
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
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
        }),
        new ExtractTextPlugin({
            filename: 'css/[name].css'
        }),
        ...HTMLWebpackPlugins
    ]
};
