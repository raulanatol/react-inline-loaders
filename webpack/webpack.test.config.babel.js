/* eslint-disable import/no-extraneous-dependencies */
import SystemBellPlugin from 'system-bell-webpack-plugin';

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  },
  externals: {
    jsdom: 'window',
    cheerio: 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': 'window'
  },
  module: {
    preLoaders: [
      { test: /\.js[x]?$/, loaders: ['isparta', 'eslint'], include: ['../test'] },
    ],
    loaders: [
      { test: /\.less$/, loaders: ['style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]--[hash:base64:5]', 'postcss-loader'] },
      { test: /\.js[x]?$/, exclude: /node_modules/, loaders: ['babel-loader'] },
      { test: /\.json$/, loader: 'json-loader' }
    ]
  },
  plugins: [
    new SystemBellPlugin()
  ]
};
