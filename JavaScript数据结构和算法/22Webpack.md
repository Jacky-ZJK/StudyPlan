## wbpack 安装
- 安装本地的 webpack
- npm install webpack webpack-cli -D

## [有关 npx 命令](http://www.ruanyifeng.com/blog/2019/02/npx.html)

## 手动配置webpack
- 默认配置文件 webpack.config.js,查看：node_modules/webpack-cli/bin/config-yargs.js 文件下的 defaultDescription
- webpack的模式默认采用生产环境，将代码压缩优化
- 配置'scripts'脚本， `webpack --config webpack.config.my.js`
- 了解打包后文件代码
- webpack-dev-server
- html-webpack-plugin
- mini-css-extract-plugin  需要安装 optimize-css-assets-webpack-plugin 压缩CSS, 安装 uglifyjs-webpack-plugin 压缩JS
- postcss-loader autoprefixer(7.2.6)  需要添加配置文件:postcss.config.js 添加 autoprefixer 插件

## es6 -> es5
- babel-loader @babel/core @/babel/preset-env
- @babel/plugin-proposal-class-properties  处理class{a=1} 语法
- @babel/plugin-transform-runtime @babel/runtime
- exclude/include 
- esLink-loader

## 引入JQuery
- expose-loader  {test: require.resolve('jquery), use: 'expose-loader?$'} 将$暴露给全局
- webpack.ProvidePlugin({$: jquery})    

## 图片处理
- file-loader
- html-withimg-loader
- url-loader

## 配置 source-map
- devtool: 'source-map'  独立生成sourcemap文件，出错标识当前报错的列和行
- devtool: 'eval-source-map' 不生成sourcemap文件，但是会标识当前报错的行
- devtool: 'cheap-module-source-map' 只生成sourcemap文件
- devtool: 'cheap-module-eval-source-map' 将生成的sourcemap文件集成在打包后的文件中，不显示错误列

## watch 实时监控
- watch: true
- watchOptions: {poll,aggregateTimeout,ignored}

## webpack小插件 应用
- cleanWebpackPlugin([path,path...])
- copy-webpack-plugin
- webpack.bannerPlugin

## webpack处理跨域
- devServer:{proxy:{'/api':{target: 'http://localhost:3000', pathRewrite: {'^/api': ''}}}}
- devServer: {before(app) {app.get(url,(req, res) => {})}}  模拟数据
- webpack-dev-middleware  在服务端启动webpack

## resolve 属性配置
- modules: [path.resolve('node_modules')]  只在当前目录的node_modules目录下找第三模块
- alias: {}
- mainFields: ['style', 'main']   先入口顺序
- mainFiles: []  入口文件的名字，默认为index.js
- extensions: ['.js', '.css', '.json', '.vue']

## 定义环境变量
- webpack.DefinePlugin({DEV: })

## webpack 优化
- module:{noParse: /jquery/}     不解析jquery中的依赖关系
- webpack.IgnorePlugin(/\.\/local/, /moment$/)   忽略内部引用的本地文件

## 多线程打包
- happypack

## webpack自带的优化
- tree-shaking   使用es6的import语法可以将没有用到的代码过滤掉
- scope hosting  作用域提升，打包哈的代码不会有重复声明的变量，自动省略可以简化的代码

## webpack 热更新
```js
let webpack = require('webpack')
module.exports = {
  hot: true,
  plugins: [
    new webpack.NamedModulesPlugin(),  //打印更新的模块路径
    new webpack.HotModuleReplacementPlugin(), //热更新插件
  ]
}
//================================
if(module.hot) {
  module.hot.accept('./source.js' () =>{})
}
```

## Tapable 

- npm i tapable -S

```js
require('./webpack_test02/src/a.js')
require('./webpack_test02/src/synchooks.js')

```


