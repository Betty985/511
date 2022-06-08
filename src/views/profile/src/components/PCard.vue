<script setup>
import { card } from '@/components'
defineProps({
  height: {
    type: Number,
  },
  showHeader: {
    type: Boolean,
    default: () => {
      return false
    },
  },
})
</script>

<template>
  <card>
    <div v-if="header">
      <slot name="header" />
    </div>
    <div
      :style="{
        height: `${height - 42}px`,
      }"
    >
      <slot />
    </div>
  </card>
</template>

<style scoped lang="scss">
.box {
  height: 200px;
}
</style>
