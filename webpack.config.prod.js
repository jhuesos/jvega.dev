const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const merge = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { env } = require('process');

const baseConfig = require('./webpack.config.base.js');

const { ANALYZE_BUNDLE: isAnalyzeBundleEnabled } = env;
const {
  output: { path: outputPath },
} = baseConfig;

module.exports = merge(baseConfig, {
  mode: 'production',

  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },

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
    isAnalyzeBundleEnabled && new BundleAnalyzerPlugin(),
  ].filter(plugin => !!plugin),

  performance: {
    maxAssetSize: 150000,
    maxEntrypointSize: 100000,
    hints: 'error',
  },
});
