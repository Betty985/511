<script setup></script>

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
