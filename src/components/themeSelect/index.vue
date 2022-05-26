<script setup>
import SelectColor from './selectColor.vue'
import { ref } from 'vue'

const selectColorVisible = ref(false)
const setTheme = (command) => {
  selectColorVisible.value = true
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
  <div><select-color v-model="selectColorVisible"></select-color></div>
</template>

<style scoped lang="scss"></style>
