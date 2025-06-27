const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

const pages = fs.readdirSync(path.resolve(__dirname, 'src/pages')).filter(file => file.endsWith('.html'));
const otherPages = pages.filter(page => page !== 'index.html');

module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@img': path.resolve(__dirname, 'src/img'),
      '@fancyapps/ui': path.resolve(__dirname, 'node_modules/@fancyapps/ui')
    },
    extensions: ['.js', '.mjs', '.json']
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          'html-loader',
          {
            loader: 'posthtml-loader',
            options: {
              plugins: [
                require('posthtml-include')({
                  root: 'src/pages/'
                })
              ]
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, 'node_modules/@fancyapps/ui'),
          path.resolve(__dirname, 'node_modules/swiper')
        ],
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|jpg|jpe?g|gif|svg|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][ext]',
          publicPath: '/'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/pages/index.html',
      filename: 'index.html'
    }),
    ...otherPages.map(page => new HtmlWebpackPlugin({
      template: `./src/pages/${page}`,
      filename: page
    })),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'src/img/**/*',
          to: 'img/[name][ext]',
          noErrorOnMissing: true
        }
      ]
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
      watch: true
    },
    hot: false,
    open: true,
    devMiddleware: {
      writeToDisk: true
    },
    watchFiles: ['src/**/*'],
    port: 8080,
    client: {
      overlay: {
        errors: true,
        warnings: false
      }
    }
  }
};