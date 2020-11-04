const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Happypack = require('happypack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  mode: 'production',
  /*抽离公共模块*/
  optimization: {
    /*
    splitChunks: {
      cacheGroups: {
        common: { // 公共代码
          test: /[\\/]src[\\/]/,
          minSize: 0,
          minChunks: 2,
          chunks: "initial",
          priority: 5
        },
        vendor: { // 第三方库代码
          test: /[\\/]node_modules[\\/]/,
          minSize: 0,
          minChunks: 2,
          chunks: "initial",
          priority: 10 // 优先级
        }
      }
    }*/
  },
  entry: {
    home: './src/home',
    other: './src/other'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    noParse: /jquery/,  //不解析jquery中的依赖关系
    rules: [
       {// es6 -> es5
        test: /\.js$/,
        use: [
          'Happypack/loader?id=js'
        ],
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {loader: 'css-loader'},
        ]
      },
    ]
  },
  plugins: [
    // new webpack.NamedModulesPlugin(),  //打印更新的模块路径
    // new webpack.HotModuleReplacementPlugin(), //热更新插件
    new CleanWebpackPlugin(),
    /*多线程打包插件*/
    new Happypack({
      id: 'js',
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: [
              "@babel/preset-env"
            ],
            plugins: [
              '@babel/plugin-syntax-dynamic-import'
            ]
          }
        }
      ]
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['home']
    }),
    new HtmlWebpackPlugin({
      template: './src/other.html',
      filename: 'other.html',
      chunks: ['other']
    })
  ]

}