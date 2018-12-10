const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(css)$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  mode: 'development',
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html'
    })
  ],
  devServer: {
    host: '127.0.0.1',
    port: '8888',
    hot: true,
    open: true
  }
}
