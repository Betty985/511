<script setup>
import menuBar from './menu.vue'
const logoHeight = 44
</script>

<template>
  <div class="navBar">
    <div class="logo-container">
      <el-avatar
        :size="logoHeight"
        shape="square"
        src="https://tse4-mm.cn.bing.net/th/id/OIP-C.s9iuByRkWL7rNkxe_gWYKgHaEK?w=305&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
      ></el-avatar>
      <h1 class="logo-title" v-if="$store.getters.sidebarOpened">
        {{ $t('msg.name') }}
      </h1>
    </div>
    <el-scrollbar>
      <menuBar></menuBar>
    </el-scrollbar>
  </div>
</template>

<style scoped lang="scss">
.logo-container {
  height: v-bind(logoHeight) + 'px';
  padding: 10px 0 6px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .logo-title {
    margin-left: 10px;
    color: #fff;
    font-weight: 600;
    width: 100px;
    line-height: 50px;
    font-size: 16px;
    white-space: nowrap;
  }
  // logo主体居中
  ::v-deep .el-avatar {
    & img {
      object-position: -19px 0px;
    }
  }
}
</style>
