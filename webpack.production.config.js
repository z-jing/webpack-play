var path = require('path');   // nodeJs  用于处理文件与目录的路径的模块
var HtmlWebpackPlugin = require('html-webpack-plugin');  // 生成一个HTML文件
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
  // entry: {
  //   app: path.resolve(APP_PATH, 'index.js'),
  //   // 添加要打包在vendors里的库
  //   vendors: ['jquery', 'moment']
  // },
  entry: APP_PATH,
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.css$/,
        use: [ { loader: 'style-loader' }, { loader: 'css-loader' } ]
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap'],
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=40000'
      }
    ]
  },
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       commons: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: "vendors",
  //         chunks: "all"
  //       }
  //     }
  //   }
  // },
  plugins: [
    new HtmlWebpackPlugin({
      title: '贝加尔湖'
    })
  ]
};