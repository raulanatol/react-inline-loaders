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
    },
    'react-dom': {
      amd: 'react-dom',
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      root: 'ReactDOM'
    }
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ }
    ]
  },
  output: {
    filename: 'index.js',
    libraryTarget: 'umd',
    // eslint-disable-next-line no-undef
    path: __dirname + '/dist'
  },
  plugins: [
    new DtsBundlePlugin()
  ]
};

function DtsBundlePlugin() {}

DtsBundlePlugin.prototype.apply = function(compiler) {
  compiler.hooks.afterEmit.tap('DtsBundlePlugin', function() {
    const dts = require('dts-bundle');
    dts.bundle({
      name: 'react-inline-loaders',
      main: '.dts/index.d.ts',
      out: '../dist/index.d.ts',
      removeSource: true,
      outputAsModuleFolder: true
    });
  });
};
