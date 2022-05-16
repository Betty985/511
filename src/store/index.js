import { createStore } from 'vuex'
import user from './modules/user'
import app from './modules/app'
import getters from './getters'
// 创建一个新的 store 实例
const store = createStore({
  getters,
  modules: {
    user,
    app,
  },
})

export default store
