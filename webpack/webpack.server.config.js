const path = require('path');
const webpack = require('webpack');
const extract = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

const config = {
  entry: ["regenerator-runtime/runtime", path.resolve(__dirname, '../source/server.js')],
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'server.js',
    publicPath: '/public'
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
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          emitFile: false,
          publicPath: '/public/',
        }
      },
      {
        test: /\.css$/,
        use: [
          { 
            loader: extract.loader,
          }, 
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer()]
            }
          } 
        ],
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
      BASEURL: JSON.stringify(process.env.NODE_ENV === 'production' ? 'https://armandodejesus.now.sh' : 'http://localhost:3000'),
      ASSETS: JSON.stringify(process.env.NODE_ENV === 'production' ? '/public' : '/public'),
    })
  ],
  target: 'node',
}


module.exports = config;