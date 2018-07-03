const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    'index': './src/index.ts'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React'
    }
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },
      {
        test: /\.css?$/, use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[sha1:hash:hex:4]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('postcss-import')(),
                require('postcss-url')(),
                require('postcss-cssnext')(),
                require('postcss-reporter')()
              ]
            }
          }
        ]
      },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' }
    ]
  },
  output: {
    libraryTarget: 'umd'
  },
  plugins: [
    new DtsBundlePlugin()
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            warnings: false
          }
        }
      })
    ]
  }
};

function DtsBundlePlugin() {}

DtsBundlePlugin.prototype.apply = function(compiler) {
  compiler.hooks.afterEmit.tap('DtsBundlePlugin', function() {
    const dts = require('dts-bundle');
    dts.bundle({
      name: '@nologis/maps',
      main: '.dts/index.d.ts',
      out: '../dist/index.d.ts',
      removeSource: true,
      outputAsModuleFolder: true
    });
  });
};
