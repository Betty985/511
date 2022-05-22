import { createApp } from 'vue'
import store from '@/store'
import router from '@/router'
import App from '@/App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 初始化样式表
import '@/styles/index.scss'
// 导入svgicon
import installIcons from '@/icons'
// 导入路由守卫
import '@/router/permission'
// 导入国际化插件
import i18n from '@/locale'
// element国际化
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'
const app = createApp(App)
installIcons(app)
app
  .use(store)
  .use(ElementPlus, {
    locale: store.getters.language === 'en' ? en : zhCn,
  })
  .use(router)
  .use(i18n)
app.mount('#app')
