var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    './index.js'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    alias: {
      'zepto': path.join(process.cwd(), '../../','node_modules/zepto/zepto.min.js'),
      // 'zepto': 'http://localhost:3000/public/common/js/zepto/zepto.min.js',
    },
    extensions: ['', '.js', '.jsx']
  },
  externals: [
    // {'zepto':'Zepto'}
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
        include: __dirname
      }, 
      {
        test: /\.(css)$/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
}

