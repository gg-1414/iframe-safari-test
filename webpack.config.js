const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mode = process.env.NODE_ENV || 'production';

module.exports = {
  context: __dirname,
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "index.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new Dotenv(),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [{
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name() {
              return mode === 'development' ? '[contenthash].[ext]' : `[contenthash].[ext]`
            }
          }
        }
      },
    ]
  },
  devServer: {
    host: "localhost",
    port: 9000,
    publicPath: '/',
    contentBase: path.join(__dirname, 'dist')
  }
};
