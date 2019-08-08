const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');

module.exports = merge(baseConfig, {
  mode: 'production',

  performance: {
    maxAssetSize: 100000,
    maxEntrypointSize: 100000,
    hints: 'error',
  },
});
