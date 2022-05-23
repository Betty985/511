<script setup>
import { computed } from 'vue'
// 获取状态
import { useStore } from 'vuex'
const store = useStore()
const icon = computed(() => {
  return store.getters.sidebarOpened ? 'hamburger-opened' : 'hamburger-closed'
})

const toggleClick = () => {
  store.commit('app/triggerSidebarOpened')
}
</script>

<template>
  <div class="hamburger-container" @click="toggleClick">
    <svg-icon class="hamburger" :icon="icon"></svg-icon>
  </div>
</template>

<style scoped lang="scss">
.hamburger-container {
  padding: 0 1rem;
  line-height: 2.875rem;
  cursor: pointer;
  // hover 动画
  transition: background 0.5s;
  float: left;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  .hamburger {
    display: inline-block;
    vertical-align: middle;
    width: 1.25rem;
    height: 1.25rem;
  }
}
</style>
