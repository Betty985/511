import axios from 'axios'
import { ElMessage } from 'element-plus'
import store from '@/store'
import { isTimeout } from './auth'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
})
// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 统一注入token
    if (store.getters.token) {
      if (isTimeout()) {
        // 退出
        store.dispatch('user/loginOut')
        return Promise.reject(new Error('token过期'))
      }
      config.headers.Authorization = `Bearer ${store.getters.token}`
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  },
)
// 响应拦截器
service.interceptors.response.use(
  // 请求成功
  (res) => {
    const { success, message, data } = res.data
    // 需要判断当前请求是否成功
    // if 成功 返回解析数据
    if (success) {
      return data
    } else {
      // 失败(请求成功，业务失败)，消息提示
      ElMessage.error(message)
      return Promise.reject(new Error(message))
    }
  },
  // 请求失败
  (err) => {
    ElMessage.error(err.message)
    return Promise.reject(err)
  },
)
export default service
