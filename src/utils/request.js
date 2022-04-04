import axios from 'axios'
import { ElMessage } from 'element-plus'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
})
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
