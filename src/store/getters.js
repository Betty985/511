import variables from '@/styles/variable.scss'
console.log(variables)
// 快捷访问
const getters = {
  token: (state) => state.user.token,
  hasUserInfo: (state) => {
    // true表示用户信息存在
    return JSON.stringify(state.user.userInfo) !== '{}'
  },
  userInfo: (state) => state.user.userInfo,
  cssVar: (state) => variables,
}
export default getters
