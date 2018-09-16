var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');
const webpack = require('webpack');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        include: SRC_DIR,
        loader: 'babel-loader',      
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      // {
      //   test: /\.css$/,
      //   use: [
      //     { 
      //       loader: 'style-loader' 
      //     },
      //     { 
      //       loader: 'css-loader', 
      //       options: {
      //         modules: true,
      //         importLoaders: 1,
      //         localIdentName: '[name]_[local]_[hash:base64]',
      //         sourceMap: true,
      //         minimize: true,
      //       }
      //     },
      //   ]
      // }
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' 
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  }
};