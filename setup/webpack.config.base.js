const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: path.resolve(__dirname, '../build')
  },
  module: {
    rules: [
      {
        test: /\.(js|es6)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'eslint-loader'
        ]
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader',
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader',
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.es6', '.vue']
  },
  plugins: [
    /**
     * This plugin is required in order the loader to work
     * @see {@link https://vue-loader.vuejs.org/guide/#webpack-configuration}
     */
    new VueLoaderPlugin(),
  ],
};
