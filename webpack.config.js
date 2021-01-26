const webpack = require('webpack');
const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = !isProduction;

module.exports = {
  mode: isProduction ? 'production' : 'development',
  bail: isProduction,
  context: path.join(__dirname, 'src'),
  entry: {
    src: './index.jsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: '[name].[chunkhash:8].js',
    chunkFilename: '[name].[chunkhash:8].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: [isDevelopment && 'react-refresh/babel'].filter(Boolean),
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.less$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
    ].filter(Boolean),
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production', // use 'production' unless process.env.NODE_ENV is defined
    }),
    new CopyWebpackPlugin({
      patterns: [
        '.htaccess',
        'static/favicon.ico',
        'static/ogimage.png',
      ],
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    isProduction && new MiniCssExtractPlugin({
      filename: '[name].[chunkhash:8].css',
      chunkFilename: '[name].[chunkhash:8].css',
    }),
    isDevelopment && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
  optimization: {
    moduleIds: 'named',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: 30,
      maxAsyncRequests: 30,
      maxSize: 100000,
    },
  },
  stats: {
    assetsSort: '!size',
    entrypoints: false,
  },
  devServer: {
    compress: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 3000,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
  },
};
