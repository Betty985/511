// 初始化i18n实例
import { createI18n } from 'vue-i18n'
import ZH from './lang/zh'
import EN from './lang/en'
// 数据源
const messages = {
  en: {
    msg: {
      name: '511 admin',
      languageChanged: 'Language changed to English',
    },
    ...EN,
  },
  zh: {
    msg: {
      name: '511 系统',
      languageChanged: '语言切换为中文',
    },
    ...ZH,
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
