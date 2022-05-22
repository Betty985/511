// 初始化i18n实例
import { createI18n } from 'vue-i18n'
// 数据源
const messages = {
  en: {
    msg: {
      test: 'hello world',
    },
  },
  zh: {
    msg: {
      test: '你好世界',
    },
  },
}
// 语言变量
const locale = 'en'
const i18n = createI18n({
  // 使用composition Api需要设置为false
  legacy: false,
  // 全局注入t函数
  globalInjection: true,
  locale,
  messages,
})

export default i18n
