import variables from '@/styles/variable.scss'

// 快捷访问
const getters = {
  token: (state) => state.user.token,
  hasUserInfo: (state) => {
    // true表示用户信息存在
    return JSON.stringify(state.user.userInfo) !== '{}'
  },
  userInfo: (state) => state.user.userInfo,
  cssVar: (state) => {
    return {
      ...variables,
      menuBg: state.theme.mainColor,
    }
  },
  sidebarOpened: (state) => state.app.sidebarOpened,
  language: (state) => state.app.language,
  mainColor: (state) => state.theme.mainColor,
}
export default getters
