var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

/**
 * exports an object which includes all of the basic settings of webpack
 */
module.exports = {
  entry: './src/client/app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      //any js file or js modules inside the application, go ahead and run the babel-loader on it
      { test: /\.(js)$/, use: 'babel-loader' }, 
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] }
    ]
  },
  mode: 'development',
  devServer: {
    port: 9000,
    host: 'localhost',
    compress: true,  //服务器返回浏览器的时候是否启动gzip压缩
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/client/app/index.html'
    })
  ]
}