var webpack = require('webpack');
var path = require('path');

// Uglify JS
var uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
  compress: {
    warnings: false
  }
});

// Set the environment to development|production
var setTheEnvironment = new webpack.DefinePlugin({
  'process.env.NODE_ENV': `"${process.env.NODE_ENV || 'development'}"`
});

module.exports = {
  entry: {
    'cool-js': path.resolve(__dirname, 'src', 'cool-js-app.js')
  },
  output: {
    publicPath: '/dist/',
    path: __dirname + '/dist/',
    filename: '[name].js'
  },
  debug: true,
  devtool: 'source-map',
  module: {
    loaders: [{
      loader: 'babel-loader',
      include: [
        path.resolve(__dirname, 'src')
      ],
      test: /\.js?$/
    }]
  },
  plugins: [
    // uglifyJsPlugin,
    setTheEnvironment
  ]
};
