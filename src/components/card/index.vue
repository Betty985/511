<script setup>
defineProps({
  bodyStyle: {
    type: Object,
    default: () => ({ padding: '20px' }),
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
  <el-card class="box-card" :body-style="body - style">
    <template #header v-if="showHeader">
      <slot name="header" />
    </template>
    <slot />
  </el-card>
</template>

<style scoped lang="scss"></style>
