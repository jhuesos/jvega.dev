const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');

const {
  output: { path: outputPath },
} = baseConfig;

module.exports = merge(baseConfig, {
  mode: 'production',

  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin([
      // Netlify custom headers file
      {
        from: path.join(__dirname, '_headers'),
        to: path.join(outputPath, '_headers'),
        toType: 'file',
      },
    ]),
  ],

  performance: {
    maxAssetSize: 100000,
    maxEntrypointSize: 100000,
    hints: 'error',
  },
});
