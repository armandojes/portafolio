const path = require('path');
const webpack = require('webpack');
const extract = require('mini-css-extract-plugin');

const config = {
  entry: ["regenerator-runtime/runtime", path.resolve(__dirname, '../source/server.js')],
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'server.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: "/(node_modules)/",
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.css$/,
        use: [extract.loader, {
          loader: 'css-loader',
          options: {
            modules: true,
          },
        }],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  plugins: [
    new extract({
      filename: "styles.css"
    }),
    new webpack.DefinePlugin({
      IS_PRODUCTION: process.env.NODE_ENV === 'production' ? true : false,
      BASEURL: JSON.stringify(process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3001'),
      ASSETS: JSON.stringify(process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3001/public'),
    })
  ],
  target: 'node',
}


module.exports = config;