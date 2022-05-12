<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { filterRouters, generateMenus } from '@/utils/route'
import item from './item.vue'
console.log(item)
const router = useRouter()
// console.log(router.getRoutes())
// 路由表的问题：存在重复的路由数据; 不满足该条件 `meta && meta.title && meta.icon` 的数据不应该存在
const routes = computed(() => {
  const filterRoutes = filterRouters(router.getRoutes())
  return generateMenus(filterRoutes)
})
console.log(JSON.stringify(routes.value))
</script>

<template>
  <div>
    <el-menu
      :unique-opened="true"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <item v-for="item in routes" :key="item.path" :route="item"></item>
    </el-menu>
  </div>
</template>

<style scoped lang="scss"></style>
