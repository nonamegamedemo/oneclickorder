const path                           = require('path');
const HtmlWebpackPlugin              = require('html-webpack-plugin');
const CopyWebpackPlugin              = require('copy-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const ExtractTextPlugin              = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: "css/[name].[contenthash:6].css",
});

module.exports = {
    entry: './src/index.js',
    output: {
        publicPath: '/',
        path: path.resolve(__dirname + '/dist'),
        filename: 'build.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {test: /\.js|jsx$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/, loader: 'file-loader'},
            {
                test: /\.(scss|sass)$/,
                use: extractSass.extract([ {
                    loader: "css-loader", // translates CSS into CommonJS 
                    options: {sourceMap: true}
                }, {
                    loader: "sass-loader", // compiles Sass to CSS 
                    options: {sourceMap: true}
                }])
            }
        ]
    },
    plugins: [
        extractSass,
        new CopyWebpackPlugin([
            {
                from: 'node_modules/semantic-ui-css/semantic.css',
                to: 'css/'
            },
            {
                from: 'node_modules/semantic-ui-css/themes/',
                to: 'css/themes/'
            }
        ]),

        new HtmlWebpackPlugin({
            title: '测试Demo',
            filename: 'index.html',
            template: 'src/index.html'
        }),

        new HtmlWebpackIncludeAssetsPlugin({
            assets: ['css/semantic.css'],
            append: false
        })
    ],
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        historyApiFallback: {
            index: '/index.html',
            rewrites: [
                {from: /^\/$/, to: '/index.html'},
                {from: /^.*(!=\.(html|js|css|png|jpg|gif|jpeg|mp3|mp4))$/, to: '/index.html'}
            ]
        }
    }
};