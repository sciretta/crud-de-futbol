const path = require('path');
const HtmlWebpackPlugin= require('html-webpack-plugin');

module.exports = {
  mode:'development',
  entry: './src/client/index.js',
  output:{
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 9000
  },
  module:{
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-react',
              '@babel/preset-env'
            ]
          }
        }
      },
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'src/client/index.html'
    })
  ]
};