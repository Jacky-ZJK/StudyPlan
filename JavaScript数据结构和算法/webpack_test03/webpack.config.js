const path = require( 'path' ) 
const webpack = require( 'webpack' )
const Happypack = require( 'happypack' )
const HardSourcePlugin = require( 'hard-source-webpack-plugin' )
const SpeedMeasurePlugin = require( 'speed-measure-webpack-plugin' )

const smp = new SpeedMeasurePlugin()



/** 
 * optimization-config
*/

const runtimeChunk = {}

const splitChunks = {
  cacheGroups: {
    vendor: {
        //第三方依赖
        priority: 1, //设置优先级，首先抽离第三方模块
        name: 'vendor',
        test: /node_modules/,
        chunks: 'initial',
        minSize: 0,
        minChunks: 1 //最少引入了1次
    },
    //缓存组
    common: {
        //公共模块
        chunks: 'initial',
        name: 'common',
        minSize: 100, //大小超过100个字节
        minChunks: 3 //最少引入了3次
    }
  }
}


/** 
 * loader-config
*/
const handle_es6 = {
  test: /\.js$/,
  use: "Happypack/loader?id=js",
  include: [ path.resolve( __dirname, 'src' ) ]
}


/** 
 * plugins-config
*/
const happypack_js = new Happypack({
  id: 'js',
  use: [ 
    'cache-loader',
    {
      loader: 'babel-loader',
      options: {
        presets: [ '@babel/preset-env' ],
        plugins: [
          '@babel/plugin-transform-runtime'
        ],
      }
    }
  ],
  threads: 2
})

const hard_source = new HardSourcePlugin()

//忽略 moment 下的 ./locale 目录
const ignore = new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)


const config = {
  mode: 'development',
  optimization: {
    splitChunks
  },
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve( 'dist' )
  },
  resolve: {
    extensions: [ '.js', '.json', '.css', '.html' ]
  },
  externals: {},
  module: {
    rules: [
      handle_es6,
    ]
  },
  plugins: [
    happypack_js,
    hard_source
  ]
}


module.exports = smp.wrap( config )