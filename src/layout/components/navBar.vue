<script setup>
import { useStore } from 'vuex'
import Hamburger from '@c/hamburger/index.vue'
const store = useStore()
const loginOut = () => {
  store.dispatch('user/loginOut')
}
</script>

<template>
  <div class="navbar">
    <!-- 汉堡 -->
    <Hamburger class="hamburger-container" />
    <div class="right-menu">
      <!-- 头像 -->
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <el-avatar
            shape="square"
            :size="40"
            :src="$store.getters.userInfo.avatar"
          ></el-avatar>
          <i class="el-icon-s-tools"></i>
        </div>
        <template #dropdown>
          <el-dropdown-menu class="user-dropdown">
            <router-link to="/">
              <el-dropdown-item>主页</el-dropdown-item>
            </router-link>
            <router-link to="/">
              <el-dropdown-item>个人中心</el-dropdown-item>
            </router-link>
            <el-dropdown-item divided @click="loginOut"
              >退出登录</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style scoped lang="scss">
.navbar {
  height: 3.125rem;
  overflow: hidden;
  position: relative;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  .hamburger-container {
    float: left;
  }
  .right-menu {
    display: flex;
    align-items: center;
    float: right;
    padding-right: 1rem;
    ::v-deep .avatar-container {
      cursor: pointer;
      .avatar-wrapper {
        margin-top: 0.3125rem;
        position: relative;
        .el-avatar {
          --el-avatar-background-color: none;
          margin-right: 0.75rem;
        }
      }
    }
  }
}
</style>
