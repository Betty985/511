<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { filterRouters, generateMenus } from '@/utils/route'

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
      <!-- 子集menu -->
      <el-sub-menu index="1">
        <template #title>
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item index="1-1">1-1</el-menu-item>
        <el-menu-item index="1-2">1-2</el-menu-item>
      </el-sub-menu>
      <!-- 具体菜单 -->
      <el-menu-item index="2">
        <i class="el-icon-location"></i>
        <template #title>导航二</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style scoped lang="scss"></style>
