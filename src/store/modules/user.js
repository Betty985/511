import { login } from '@/api/sys'
import md5 from 'md5'
export default {
  // 单独的模块
  namespaced: true,
  state: () => ({}),
  mutations: {},
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
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
  },
}
