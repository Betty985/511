// 导入node中的path模块
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  // webpack devServer提供了代理的功能，该代理可以把所有请求到当前服务中的请求代理到另外的服务器上
  devServer: {
    proxy: {
      // 当地址中包含"/api"时，触发代理
      '/api': {
        target:
          'https://www.fastmock.site/mock/c3dd630f99c340fa159ec877bd1cac57',
        // 跨域
        changeOrigin: true,
      },
    },
  },
  // 配置 svg-sprite-loader
  // config为webpack 配置对象
  // config.module表示创建一个具名规则，以后用来修改规则
  chainWebpack(config) {
    config.module
      // 规则
      .rule('svg')
      // 忽略
      .exclude.add(resolve('src/icons'))
      // 结束
      .end()
    config.module
      // 规则
      .rule('icons')
      // 正则，解析.svg格式文件
      .test(/\.svg$/)
      // 解析的文件
      .include.add(resolve('src/icons'))
      // 结束
      .end()
      // 新增了一个解析的loader
      .use('svg-sprite-loader')
      // 具体的loader
      .loader('svg-sprite-loader')
      // loader的配置
      .options({
        symbolId: 'icon-[name]',
      })
      // 结束
      .end()
    // 路径别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@u', resolve('src/utils'))
      .set('@c', resolve('src/components'))
  },
}
