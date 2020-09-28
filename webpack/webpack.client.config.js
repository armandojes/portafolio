const path = require('path');
const webpack = require('webpack');
const extract = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

const config = {
  entry: ["regenerator-runtime/runtime", path.resolve(__dirname, '../source/client.js')],
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: 'client.js',
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
          emitFile: true,
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
      IS_PRODUCTION: process.env.NODE_ENV === 'production',
      BASEURL: JSON.stringify(process.env.NODE_ENV === 'production' ? 'https://armandodejesus.now.sh' : '/public'),
      ASSETS: JSON.stringify(process.env.NODE_ENV === 'production' ? '/public' : '/public'),
    })
  ],
  target: 'web',
}


module.exports = config;