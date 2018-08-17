var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './es6/main.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: path.join(__dirname, 'es6'),
                exclude:"/node_modules/",
                query: {
                  presets: ['env','stage-1'],
                  plugins: ['transform-decorators-legacy','transform-decorators', ["transform-runtime",{"polyfill":true}]]
                },
            }
        ]
    },
    plugins: [
        // Avoid publishing files when compilation fails
        new webpack.NoErrorsPlugin()
    ],
    stats: {
        // Nice colored output
        colors: true
    },
    // Create Sourcemaps for the bundle
    devtool: 'source-map',
};
