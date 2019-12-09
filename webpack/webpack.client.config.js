const path = require('path');
const webpack = require('webpack');
const extract = require('mini-css-extract-plugin');

const config = {
  entry: ["regenerator-runtime/runtime", path.resolve(__dirname, '../source/client.js')],
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: 'client.js'
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
    extensions: ['.js', '.jsx', '.css'],
    alias: {
      hooks: path.resolve(__dirname, '../source/app/hooks'),
      helpers: path.resolve(__dirname, '../source/app/helpers'),
      components: path.resolve(__dirname, '../source/app/components'),
      flux: path.resolve(__dirname, '../source/app/redux'),
    }
  },
  plugins: [
    new extract({
      filename: "styles.css"
    }),
    new webpack.DefinePlugin({
      IS_PRODUCTION: process.env.NODE_ENV === 'production' ? true : false,
      BASEURL: JSON.stringify(process.env.NODE_ENV === 'production' ? '' : 'http://192.168.1.4:3000'),
      ASSETS: JSON.stringify(process.env.NODE_ENV === 'production' ? '' : 'http://192.168.1.4:3000/public'),
    })
  ],
  target: 'web',
}


module.exports = config;