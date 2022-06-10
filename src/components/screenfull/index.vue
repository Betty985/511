<script setup>
import screenfull from 'screenfull'
import { ref, onMounted, onUnmounted } from 'vue'
defineProps({
  effect: {
    type: String,
    default: 'dark',
  },
})
// 是否全屏
const isFullscreen = ref(false)
// 监听变化
const change = () => {
  isFullscreen.value = screenfull.isFullscreen
}
// 切换全屏
const onToggle = () => {
  screenfull.toggle()
}
// 设置侦听器
onMounted(() => {
  screenfull.on('change', change)
})
// 删除侦听器
onUnmounted(() => {
  screenfull.off('change', change)
})
</script>

<template>
  <el-tooltip
    :content="$t('navBar.screenfull')"
    :effect="effect"
    placement="bottom"
  >
    <div>
      <svg-icon
        :icon="isFullscreen ? 'exit-fullscreen' : 'fullscreen'"
        @click="onToggle"
      />
    </div>
  </el-tooltip>
</template>

<style scoped lang="scss"></style>
