// 快捷访问
const getters = {
  token: (state) => state.user.token,
  hasUserInfo: (state) => {
    // true表示用户信息存在
    return JSON.stringify(state.user.userInfo) !== '{}'
  },
}
export default getters
