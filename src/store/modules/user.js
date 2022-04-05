import { login, getUserInfo } from '@/api/sys'
import md5 from 'md5'
import { setItem, getItem, removeAllItems } from '@u/storage'
import { TOKEN } from '../../constant'
import router from '@/router'
export default {
  // 单独的模块
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || '',
    userInfo: {},
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
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
            // 跳转
            router.push('/')
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    /**
     * 获取用户信息
     * @param {*} context
     * @returns
     */
    async getUserInfo(context) {
      const res = await getUserInfo()
      this.commit('user/setUserInfo', res)
      return res
    },
    /**
     * 退出登录
     */
    loginOut() {
      // 清除缓存
      this.commit('user/setToken', '')
      this.commit('user/setUserInfo', {})
      removeAllItems()
      // 清理权限相关配置
      // 返回登录页
      router.push('/login')
    },
  },
}
