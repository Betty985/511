import request from '@u/request'
/**
 * 登录
 */
export const login = (data) => {
  return request({
    url: './sys/login',
    method: 'POST',
    data,
  })
}
