const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  /* 本地服务器配置
  devServer: {
    progress: true,
    contentBase: './dist',
    compress: true
  },*/

  /*优化项*/
  optimization: {
    minimizer: [
      /* uglifyjs 不能压缩es6语法 */
      new UglifyjsWebpackPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      /* 压缩CSS */
      new OptimizeCSSAssetsPlugin(),
      /* 应用html模板，并压缩HTML文件 */
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
        },
        hash: true
      }),
    ]
  },
  mode: 'production', //模式
  entry: './src',   //入口
  output: {   //出口
    filename: 'bundle.js',
    path: path.resolve(__dirname ,'dist')
  },
  module: {   //模块
    rules: [
    /*
      { //将$暴露给全局
        test: require.resolve('jquery'), 
        use: 'expose-loader?$'
      },
    */
      
      { // 处理html中插入<img src:"">中的路径转换问题，需要将url-loader中设置 esModule: false
       test: /\.(html)$/,
       use: {
         loader: 'html-loader',
         options: {
           attrs: ['img:src']
         }
       }
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|ico)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8 * 1024,
              name: '[name].[hash:8].[ext]',
              esModule: false, // 这里设置为false
              //publicPath: '../', //会在打包后图片路径拼上该设置
              outputPath: 'images/'//输出的图片会生成并放在当前设置的文件夹下
            }
          }
        ]
      },
    /*  
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash:8].[ext]',
              outputPath: 'images/'
            }
          }
        ]
      },
    */
      {// es6 -> es5
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                "@babel/preset-env"
              ],
              plugins: [
                ["@babel/plugin-proposal-class-properties", { "loose": true }]
              ]
            }
          }
        ],
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {loader: 'css-loader', options: { modules: true, importLoaders: 1 }},
          {loader:'postcss-loader'},
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {loader: 'css-loader', options: { modules: true, importLoaders: 1 } },
          {loader:'postcss-loader'},
          'less-loader'
        ]
      }
    ]
  },
  plugins: [
    
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: '[id].css',
    }),
    new UglifyjsWebpackPlugin()
  ]
}