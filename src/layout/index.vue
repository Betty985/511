<template>
  <div
    class="app-wrapper"
    :class="[$store.getters.sidebarOpened ? 'openSidebar' : 'hideSidebar']"
  >
    <!-- 左侧菜单 -->
    <sideBar
      class="sidebar-container"
      :style="{ backgroundColor: variables.menuBg }"
    >
    </sideBar>
    <div class="main-container">
      <div class="fixed-header">
        <!-- 顶部面包屑 -->
        <nav-bar />
      </div>
      <!-- 内容区 -->

      <app-main> </app-main>
    </div>
  </div>
</template>

<script setup>
import navBar from './components/navBar.vue'
import sideBar from './components/sideBar'
import appMain from './components/appMain.vue'
import variables from '@/styles/variable.scss'
</script>

<style scoped lang="scss">
@import '@/styles/mixin.scss';
@import '@/styles/variable.scss';
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}
.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width #{$sideBarDuration};
}

.hideSidebar .fixed-header {
  width: calc(100% - #{$hideSideBarWidth});
}
</style>
