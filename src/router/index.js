import { createRouter, createWebHistory } from 'vue-router'
/**
 * 公开路由表
 */
const routes = [
  {
    path: '/login',
    component: () => import('./../views/login/index.vue'),
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
