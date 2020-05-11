/**
 * 配置参考:
 * https://cli.vuejs.org/zh/config/
 */
const url = 'http://xuh.com:9090'
module.exports = {
  lintOnSave: true,
  productionSourceMap: false,
  chainWebpack: config => {
    // 忽略的打包文件
    config.externals({
      'axios': 'axios'
    })
    const entry = config.entry('app')
    entry
      .add('babel-polyfill')
      .end()
    entry
      .add('classlist-polyfill')
      .end()
  },
  // 配置转发代理
  devServer: {
    disableHostCheck: true,
    port:10000,
    proxy: {
      '/auth': {
        target: url,
        ws: false,
        pathRewrite: {
          '^/auth': '/auth'
        }
      },
      '/admin': {
        target: url,
        ws: false,
        pathRewrite: {
          '^/admin': '/admin'
        }
      },
      '/code': {
        target: url,
        ws: false,
        pathRewrite: {
          '^/code': '/code'
        }
      },
      '/web': {
        target: url,
        ws: false,
        pathRewrite: {
          '^/web': '/web'
        }
      }
    }
  }
}
