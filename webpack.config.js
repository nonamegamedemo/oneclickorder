var path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname + '/dist'),
        filename: 'build.js'
    },

    module: {
        loaders: [{
            test: /\.js$/,
            // Transform it with babel
            loader: 'babel-loader',
            // don't transform node_modules folder (which don't need to be compiled)
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'stage-0'],
                plugins: ['transform-runtime']
            }
        }]
    }
};