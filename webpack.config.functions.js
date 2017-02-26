/* eslint-disable import/no-extraneous-dependencies */
import SystemBellPlugin from 'system-bell-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import webpack from 'webpack';
import { join } from 'path';

export function getCommon() {
  return {
    resolve: {
      modules: ['node_modules', join(__dirname, 'src')],
      extensions: ['.js', '.jsx', '.css', '.png', '.jpg']
    },
    module: {
      loaders: [
        { test: /\.css$/, use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: [{ loader: 'css-loader' }] }) },
        { test: /\.less$/, use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader?modules&importLoaders=2&sourceMap', 'postcss-loader', 'less-loader?outputStyle=expanded'] }) },
        { test: /\.js[x]?$/, exclude: /node_modules/, loaders: ['babel-loader'] }
      ]
    },
    plugins: [
      new ExtractTextPlugin('[name].[chunkhash].css'),
      new SystemBellPlugin()
    ]
  };
}

export function getDistCommon(config) {
  return {
    output: {
      path: config.paths.dist,
      libraryTarget: 'umd',
      library: config.library
    },
    entry: config.paths.src,
    externals: {
      react: {
        commonjs: 'react',
        commonjs2: 'react',
        amd: 'React',
        root: 'React'
      }
    },
    module: {
      loaders: [
        { test: /\.js[x]?$/, loaders: ['babel-loader'], include: config.paths.src },
        { test: /\.less$/, loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=2&sourceMap!postcss!less?outputStyle=expanded&sourceMap=true&sourceMapContents=true') },
      ]
    },
    resolve: {
      modulesDirectories: ['node_modules', './src'],
      extensions: ['.js', '.jsx']
    },
    plugins: [
      new SystemBellPlugin(),
      new ExtractTextPlugin('[name].[chunkhash].css'),
    ]
  };
}

export function getSiteCommon(pkg) {
  return {
    plugins: [
      new HtmlWebpackPlugin({
        template: require('html-webpack-template'), // eslint-disable-line global-require
        inject: false,
        title: pkg.name,
        appMountId: 'app'
      }),
      new webpack.DefinePlugin({
        NAME: JSON.stringify(pkg.name),
        USER: JSON.stringify(pkg.user),
        VERSION: JSON.stringify(pkg.version)
      })
    ]
  };
}
