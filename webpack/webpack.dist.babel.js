/* eslint-disable import/no-extraneous-dependencies */
import SystemBellPlugin from 'system-bell-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import * as path from 'path';

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const ROOT_PATH = path.join(__dirname, '..');

module.exports = {
  entry: ['./src/index'],
  devtool: 'source-map',
  output: {
    path: './dist',
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'react-inline-components'
  },

  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React'
    }
  },

  resolve: {
    modulesDirectories: ['node_modules', './src'],
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      { test: /\.js[x]?$/, exclude: /node_modules/, loaders: ['babel-loader'] },
      { test: /\.less$/, loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=2&sourceMap!postcss!less?outputStyle=expanded&sourceMap=true&sourceMapContents=true') },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]') }
    ]
  },
  postcss: () => [autoprefixer({ browsers: ['last 2 versions'] })],
  plugins: [
    new SystemBellPlugin(),
    new CleanWebpackPlugin(['dist'], {
      verbose: true,
      root: ROOT_PATH
    }),
    new ExtractTextPlugin('app.css', {
      allChunks: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.DedupePlugin()
  ]
};
