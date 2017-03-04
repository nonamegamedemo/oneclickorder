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
        path: path.resolve(__dirname + '/dist'),
        filename: 'build.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {test: /\.js|jsx$/, loader: 'babel-loader'},
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
        new CopyWebpackPlugin([{
            from: 'node_modules/bootstrap/dist/css',
            to: 'css/'
        }, {
            from: 'node_modules/bootstrap/dist/fonts',
            to: 'fonts/'
        }]),

        new HtmlWebpackPlugin({
            title: '测试Demo',
            filename: 'index.html',
            template: 'src/index.html'
        }),

        new HtmlWebpackIncludeAssetsPlugin({
            assets: ['css/bootstrap.min.css', 'css/bootstrap-theme.min.css'],
            append: false
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist")
    }
};