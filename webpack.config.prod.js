const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const merge = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { InjectManifest } = require('workbox-webpack-plugin');
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
      // Netlify custom headers file and redirects
      {
        from: path.join(__dirname, '_headers'),
        to: path.join(outputPath, '_headers'),
        toType: 'file',
      },
      {
        from: path.join(__dirname, '_redirects'),
        to: path.join(outputPath, '_redirects'),
        toType: 'file',
      },
      {
        from: path.join(__dirname, './src/robots.txt'),
        to: path.join(outputPath, 'robots.txt'),
        toType: 'file',
      },
    ]),
    new InjectManifest({
      swSrc: './src/sw.js',
      globPatterns: [
        path.join(outputPath, './*.{js,svg,html,css,webp,jpg}'),
        path.join(outputPath, './manifest.json'),
        path.join(outputPath, './static/logo/*'),
      ],
      exclude: ['_headers', '_redirects', 'robots.txt'],
    }),
    isAnalyzeBundleEnabled && new BundleAnalyzerPlugin(),
  ].filter(plugin => !!plugin),

  performance: {
    maxAssetSize: 175000,
    maxEntrypointSize: 175000,
    hints: 'error',
  },
});
