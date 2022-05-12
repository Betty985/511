<script setup>
// 根据当前数据处理当前项为 el-submenu||el-menu-item
import { defineProps } from 'vue'
import menuTitle from './menuTitle.vue'
defineProps({
  route: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <el-sub-menu v-if="route.children.length > 0" :index="route.path"
    ><template #title>
      <menu-title
        :title="route.meta.title"
        :icon="route.meta.icon"
      ></menu-title>
    </template>
    <!-- 循环渲染children -->
    <item v-for="item in route.children" :key="item.path" :route="item"></item>
  </el-sub-menu>
  <el-menu-item v-else :index="route.path">
    <menu-title :title="route.meta.title" :icon="route.meta.icon"></menu-title>
  </el-menu-item>
</template>

<style scoped lang="scss"></style>
