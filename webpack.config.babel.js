/* eslint-disable no-param-reassign, import/no-extraneous-dependencies */
import * as path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import merge from 'webpack-merge';

import { getCommon, getDistCommon, getSiteCommon } from './webpack.config.functions';

const pkg = require('./package.json');

const TARGET = process.env.npm_lifecycle_event;

const ROOT_PATH = __dirname;
const config = {
  paths: {
    readme: path.join(ROOT_PATH, 'README.md'),
    dist: path.join(ROOT_PATH, 'dist'),
    src: path.join(ROOT_PATH, 'src'),
    docs: path.join(ROOT_PATH, 'docs'),
    tests: path.join(ROOT_PATH, 'tests'),
    package: path.join(ROOT_PATH, 'package.json')
  },
  filename: 'index',
  library: 'react-inline-components'
};

process.env.BABEL_ENV = TARGET;

if (TARGET === 'start') {
  module.exports = merge(getCommon(config), getSiteCommon(), {
    devtool: 'eval-source-map',
    entry: {
      docs: [config.paths.docs]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"development"'
      }),
      new webpack.HotModuleReplacementPlugin()
    ],
    module: {
      loaders: [
        {
          test: /\.css$/,
          loaders: ['style', 'css']
        },
        {
          test: /\.jsx?$/,
          loaders: ['babel?cacheDirectory'],
          include: [
            config.paths.docs,
            config.paths.src
          ]
        }
      ]
    },
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      host: process.env.HOST,
      port: process.env.PORT,
      stats: 'errors-only'
    }
  });
}

function NamedModulesPlugin(options) {
  this.options = options || {};
}

/* eslint prefer-arrow-callback:off */
/* eslint func-names:off */
NamedModulesPlugin.prototype.apply = function (compiler) {
  compiler.plugin('compilation', function (compilation) {
    compilation.plugin('before-module-ids', function (modules) {
      modules.forEach(function (module) {
        if (module.id === null && module.libIdent) {
          const id = module.libIdent({
            context: this.options.context || compiler.options.context
          });

          // Skip CSS files since those go through ExtractTextPlugin
          if (!id.endsWith('.css')) {
            module.id = id;
          }
        }
      }, this);
    }.bind(this));
  }.bind(this));
};

if (TARGET === 'gh-pages' || TARGET === 'gh-pages:stats') {
  module.exports = merge(getCommon(config), getSiteCommon(pkg), {
    entry: {
      app: config.paths.docs,
      vendors: [
        'react',
        'react-dom'
      ]
    },
    output: {
      path: './gh-pages',
      filename: '[name].[chunkhash].js',
      chunkFilename: '[chunkhash].js'
    },
    plugins: [
      new CleanWebpackPlugin(['gh-pages'], {
        verbose: false
      }),
      new ExtractTextPlugin('[name].[chunkhash].css'),
      new webpack.DefinePlugin({
        // This affects the react lib size
        'process.env.NODE_ENV': '"production"'
      }),
      new NamedModulesPlugin(),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new webpack.optimize.CommonsChunkPlugin({
        names: ['vendors', 'manifest']
      })
    ],
    module: {
      loaders: [
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract('style', 'css')
        },
        {
          test: /\.js[x]?$/,
          loaders: ['babel'],
          include: [
            config.paths.docs,
            config.paths.src
          ]
        }
      ]
    }
  });
}

if (TARGET === 'test' || TARGET === 'test:tdd' || !TARGET) {
  module.exports = merge(getCommon(config), {
    module: {
      preLoaders: [
        {
          test: /\.js[x]?$/,
          loaders: ['isparta', 'eslint'],
          include: [
            config.paths.tests
          ]
        }
      ],
      loaders: [
        {
          test: /\.js[x]?$/,
          loaders: ['babel?cacheDirectory'],
          include: [
            config.paths.src,
            config.paths.tests
          ]
        }
      ]
    }
  });
}

if (TARGET === 'dist') {
  module.exports = merge(getDistCommon(config), {
    output: {
      filename: `${config.filename}.js`
    }
  });
}

if (TARGET === 'dist:min') {
  module.exports = merge(getDistCommon(config), {
    output: {
      filename: `${config.filename}.min.js`
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
  });
}
