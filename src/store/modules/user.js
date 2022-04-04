import { login } from '@/api/sys'
import md5 from 'md5'
import { setItem, getItem } from '@u/storage'
import { TOKEN } from '../../constant'
export default {
  // 单独的模块
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || '',
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    },
  },
  actions: {
    /**
     * 登录请求动作
     * @param {*} context
     * @param {*} userInfo
     * @returns
     */
    login(context, userInfo) {
      const { userName, password } = userInfo
      return new Promise((resolve, reject) => {
        login({
          userName,
          password: md5(password),
        })
          .then((data) => {
            this.commit('user/setToken', data.token)
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
  },
}
