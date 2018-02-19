const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  entry: './src/entry-client.es6',
  output: {
    filename: 'client-bundle.js',
  }
});