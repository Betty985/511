<script setup>
import SelectColor from './selectColor.vue'
import { ref } from 'vue'

const selectColorVisible = ref(false)
const setTheme = (command) => {
  selectColorVisible.value = true
}
</script>

<template>
  <div>
    <div @click="setTheme">
      <el-tooltip :content="$t('navBar.themeChange')">
        <div><svg-icon icon="change-theme"></svg-icon></div>
      </el-tooltip>
    </div>
    <!-- 展示弹出层 -->
    <select-color v-model="selectColorVisible"></select-color>
  </div>
</template>

<style scoped lang="scss"></style>
