const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: path.join(__dirname, './src/index.js'),

  output: {
    path: path.join(__dirname, './dist'),
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
        test: /\.(png|jp(e*)g)$/,
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
  ],
};
