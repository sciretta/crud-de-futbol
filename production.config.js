const path = require('path');
const HtmlWebpackPlugin= require('html-webpack-plugin');

module.exports = {
  mode:'production',
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.[contentHash].js'
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