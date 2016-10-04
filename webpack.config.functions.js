/* eslint-disable import/no-extraneous-dependencies */
import SystemBellPlugin from 'system-bell-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import webpack from 'webpack';

const autoprefixer = require('autoprefixer');

export function getCommon(config) {
  return {
    resolve: {
      extensions: ['', '.js', '.jsx', '.css', '.png', '.jpg']
    },
    module: {
      preLoaders: [
        {
          test: /\.js[x]?$/,
          loaders: ['eslint'],
          include: [
            config.paths.docs,
            config.paths.src
          ]
        }
      ],
      loaders: [
        { test: /\.less$/, loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=2&sourceMap!postcss!less?outputStyle=expanded&sourceMap=true&sourceMapContents=true') },
        {
          test: /\.png$/,
          loader: 'url?limit=100000&mimetype=image/png',
          include: config.paths.docs
        },
        {
          test: /\.jpg$/,
          loader: 'file',
          include: config.paths.docs
        },
        {
          test: /\.json$/,
          loader: 'json',
          include: config.package
        },
        { test: /\.js[x]?$/, exclude: /node_modules/, loaders: ['babel-loader'] }
      ]
    },
    postcss: () => [autoprefixer({ browsers: ['last 2 versions'] })],
    plugins: [
      new ExtractTextPlugin('[name].[chunkhash].css'),
      new SystemBellPlugin()
    ]
  };
}

export function getDistCommon(config) {
  return {
    devtool: 'source-map',
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
        {
          test: /\.js[x]?$/,
          loaders: ['babel'],
          include: config.paths.src
        },
        { test: /\.less$/, loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=2&sourceMap!postcss!less?outputStyle=expanded&sourceMap=true&sourceMapContents=true') },
      ]
    },
    postcss: () => [autoprefixer({ browsers: ['last 2 versions'] })],
    resolve: {
      modulesDirectories: ['node_modules', './src'],
      extensions: ['', '.js', '.jsx']
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
