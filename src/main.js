import { createApp } from 'vue'
import store from './store'
import router from './router'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

let app = createApp(App)
app.use(store).use(ElementPlus).use(router)
app.mount('#app')
