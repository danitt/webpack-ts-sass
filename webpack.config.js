require('dotenv').config();

const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');

const config = {
  entry: [
    './src/index.tsx'
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  },
  resolve: {
    extensions: [
      '.js',
      '.ts',
      '.tsx'
    ]
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.svg$/,
        loader: 'raw-loader'
      },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new webpack.EnvironmentPlugin({
      SECRET: 'Create a .env file to store sensitive environment variables'
    }),
  ]
};

module.exports = config;
