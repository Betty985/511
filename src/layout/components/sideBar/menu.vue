<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { filterRouters, generateMenus } from '@/utils/route'
import item from './item.vue'
const router = useRouter()
// console.log(router.getRoutes())
// 路由表的问题：存在重复的路由数据; 不满足该条件 `meta && meta.title && meta.icon` 的数据不应该存在
const routes = computed(() => {
  const filterRoutes = filterRouters(router.getRoutes())
  return generateMenus(filterRoutes)
})
// 默认激活项
const route = useRoute()
const activeMenu = computed(() => {
  const { path } = route
  return path
})
</script>

<template>
  <div>
    <el-menu
      :default-active="activeMenu"
      :unique-opened="true"
      :background-color="$store.getters.cssVar.menuBg"
      :text-color="$store.getters.cssVar.menuText"
      :active-text-color="$store.getters.cssVar.menuActiveText"
      router
    >
      <item v-for="item in routes" :key="item.path" :route="item"></item>
    </el-menu>
  </div>
</template>

<style scoped lang="scss"></style>
