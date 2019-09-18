const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const outputPath = path.join(__dirname, './dist');

module.exports = {
  entry: path.join(__dirname, './src/index.js'),

  output: {
    path: outputPath,
    filename: '[name].[contenthash].min.js',
  },

  optimization: {
    moduleIds: 'hashed',
    runtimeChunk: 'single',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  stats: {
    children: false,
    modules: false,
    hash: false,
    builtAt: false,
    version: false,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              publicPath: '../',
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(webp|png|jp(e*)g)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8000, // Convert images < 8kb to base64 strings
              name: 'images/[hash]-[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-url-loader',
        options: {
          limit: 10 * 1024,
          noquotes: true,
        },
      },
      {
        test: /\.(woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'fonts/[name].[ext]',
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[name].[contenthash].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/index.tpl.ejs'),
    }),
    new PreloadWebpackPlugin({
      rel: 'preload',
      // As these are loaded by the entrypoint, Webpack will not add the link
      // elements to the index.html. We use this plugin to do that
      include: ['email-icon', 'home-icon', 'home-icon', 'ReactApp', 'Menu'],
    }),
    new CopyPlugin([
      {
        from: path.join(__dirname, './static/icons'),
        to: path.join(outputPath, './static/icons'),
        toType: 'dir',
      },
      {
        from: path.join(__dirname, './src/manifest.json'),
        to: path.join(outputPath, 'manifest.json'),
        toType: 'file',
      },
    ]),
  ],
};
