const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { watch } = require('fs');

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
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
          {
            loader: 'posthtml-loader',
            options: {
              plugins: [
                require('posthtml-include')({
                  root: 'src/pages/', // Папка с компонентами
                }),
              ],
            },
          },
        ],
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
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|jpe?g|gif|svg|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][ext]',
          publicPath: '/',
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource'
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/pages/index.html',
      filename: 'index.html',
    }),

    // Остальные страницы
    ...otherPages.map(page => new HtmlWebpackPlugin({
      template: `./src/pages/${page}`,
      filename: page,
    })),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'src/img/**/*',  // Рекурсивно копируем всё внутри img/
          to: 'img/[name][ext]',
          noErrorOnMissing: true,
        }
      ]
    })


  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
      watch: true,
    },
    hot: false,
    open: true,
    devMiddleware: {
      writeToDisk: true, // Записывает файлы на диск
    },
    watchFiles: ['src/**/*'], // Следит за изменениями
    port: 8080,
    client: {
      overlay: {
        errors: true,
        warnings: false
      }
    }
  }
};