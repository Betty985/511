<script setup>
import { useFullscreen } from '@vueuse/core'

const { isFullscreen, toggle } = useFullscreen()
defineProps({
  effect: {
    type: String,
    default: 'dark',
  },
})
</script>

<template>
  <div @click="toggle">
    <el-tooltip :content="$t('navBar.screenfull')">
      <div>
        <svg-icon :icon="isFullscreen ? 'exit-fullscreen' : 'fullscreen'" />
      </div>
    </el-tooltip>
  </div>
</template>

<style scoped lang="scss"></style>
