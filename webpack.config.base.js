const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, './src/index.js'),

  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].[contenthash].min.js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/index.tpl.ejs'),
    }),
  ],

  optimization: {
    moduleIds: 'hashed',
    runtimeChunk: 'single',
  },
};
