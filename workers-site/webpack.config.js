const path = require('path')

const isProduction = process.env.NODE_ENV === 'production'

const config = {
    target: 'webworker',

    mode: isProduction ? 'production' : 'development',

    devtool: isProduction ? 'source-map' : 'eval-source-map',

    entry: {
        index: path.resolve('./index.js'),
    },

    output: {
        filename: '[name].js',
        path: path.resolve('./dist'),
        publicPath: '/',
    },
}

module.exports = config
