var path = require('path');   // nodeJs  用于处理文件与目录的路径的模块
var HtmlWebpackPlugin = require('html-webpack-plugin');  // 生成一个HTML文件
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
  entry: APP_PATH,
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
  module: {
    // loaders: [
    //   {
    //     test: /\.css$/,
    //     loader: ['style-loader', 'css-loader'],
    //     include: APP_PATH
    //   }
    // ]
    rules: [
      { test: /\.css$/, use: [ { loader: 'style-loader' }, { loader: 'css-loader' } ]}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'start app'
    })
  ]
};