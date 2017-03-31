/* eslint-disable import/no-extraneous-dependencies */
import SystemBellPlugin from 'system-bell-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import { join, resolve } from 'path';

const ROOT_PATH = join(__dirname, '..');

module.exports = {
  entry: ['./src/index'],
  output: {
    path: resolve(__dirname, './dist'),
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
    modules: [
      'node_modules',
      join(__dirname, 'src')
    ],
    extensions: ['.js', '.jsx', '.less']
  },

  module: {
    loaders: [
      { test: /\.css$/, use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: [{ loader: 'css-loader', options: { modules: true } }] }) },
      { test: /\.less$/, use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader?modules&importLoaders=2&sourceMap', 'postcss-loader', 'less-loader?outputStyle=expanded'] }) },
      { test: /\.js[x]?$/, exclude: /node_modules/, loaders: ['babel-loader'] }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'app.css',
      disable: false,
      allChunks: true
    }),
    new SystemBellPlugin(),
    new CleanWebpackPlugin(['dist'], {
      verbose: true,
      root: ROOT_PATH
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};
