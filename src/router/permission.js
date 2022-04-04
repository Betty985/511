import router from './index'
import store from '@/store'
// 白名单：未登录也能进入的页面
const whiteList = ['/login']
/**
 * 路由前置守卫
 * @param {*} to  要去哪里
 * @param {*} from  从哪里来
 * @param {*} next  是否要去
 */
router.beforeEach(async (to, from, next) => {
  // 用户已登录，不许进入login
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      // 判断用户资料是否存在，如果不存在，则获取用户信息
      if (!store.getters.hasUserInfo) {
        // dispatch 分发 actions-> 调用 mutations->改变 states
        await store.dispatch('user/getUserInfo')
      }
      next()
    }
  } else {
    // 用户未登录，只允许进入login
    if (whiteList.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login')
    }
  }
})
