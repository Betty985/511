import { createStore } from 'vuex'
import user from './modules/user'
import app from './modules/app'
import theme from './modules/theme.js'
import getters from './getters'
// 创建一个新的 store 实例
const store = createStore({
  getters,
  modules: {
    user,
    app,
    theme,
  },
})

export default store
