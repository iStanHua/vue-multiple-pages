const TerserPlugin = require('terser-webpack-plugin')
const glob = require('glob')
const path = require('path')

const resolve = (dir) => path.join(__dirname, dir)
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)

function getEntry() {
  let pages = {}
  glob.sync('./src/views/**/app.js').forEach(file => {
    const chunk = file.split('./src/views/')[1].split('/app.js')[0]
    pages[chunk] = {
      entry: file,
      template: 'public/index.html',
      filename: chunk + '.html',
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', chunk]
    }
  })
  return pages
}

module.exports = {
  productionSourceMap: false,
  lintOnSave: false,
  pages: getEntry(),

  configureWebpack: config => {
    if (IS_PROD) {
      const plugins = [];
      plugins.push(
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true,
              drop_debugger: false,
              pure_funcs: ['console.log']
            }
          },
          extractComments: /@extract/i,
          sourceMap: false,
          parallel: true
        })
      )

      config.plugins = [
        ...config.plugins,
        ...plugins
      ]
    }
  },
  chainWebpack: config => {
    config.plugins.delete('named-chunks')

    if (IS_PROD) {
      config.plugins.delete('prefetch')
    }

    // 修复HMR
    // config.resolve.symlinks(true)

    // 修复Lazy loading routes
    // config.plugin('html').tap(args => {
    //   args[0].chunksSortMode = 'none'
    //   return args
    // })
    https://www.infoq.cn/article/9ihyy7HW00ij8suTh*zN

    // 添加别名
    config.resolve.alias
      .set('@', resolve('src'))
  },
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    }
  },
  css: {
    extract: false,
    loaderOptions: {
      sass: {
        prependData: '@import "@/styles/variables.scss";'
      }
    }
  },
  pluginOptions: {
  },
  parallel: require('os').cpus().length > 1,
  devServer: {
    open: true,
    port: 9095,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8001'
      }
    }
  }
}
