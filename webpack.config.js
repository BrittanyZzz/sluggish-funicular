var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

/**
 * exports an object which includes all of the basic settings of webpack
 */
module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      //any js file or js modules inside the application, go ahead and run the babel-loader on it
      { test: /\.(js)$/, use: 'babel-loader' }, 
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] }
    ]
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ]
}