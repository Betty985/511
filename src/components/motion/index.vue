<script setup>
defineProps({
  initial: {
    type: Object,
    default: () => ({
      opacity: 0,
      y: 100,
    }),
  },
  enter: {
    type: Object,
    default: () => ({
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: '100',
        delay: 100,
      },
    }),
  },
  delay: {
    type: Number,
    default: 100,
  },
})
</script>

<template>
  <div v-motion :initial="initial" :enter="enter" :delay="delay"><slot /></div>
</template>

<style scoped lang="scss"></style>
