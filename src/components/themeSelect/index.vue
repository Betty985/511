<script setup>
const setTheme = (command) => {
  console.log(command)
}
</script>

<template>
  <el-dropdown
    v-bind="$attrs"
    trigger="click"
    class="theme"
    @command="setTheme"
  >
    <el-tooltip :content="$t('navBar.themeChange')">
      <div><svg-icon icon="change-theme"></svg-icon></div>
    </el-tooltip>

    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :command="color">
          {{ $t('navBar.themeChange') }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  <!-- 展示弹出层 -->
  <div></div>
</template>

<style scoped lang="scss"></style>
