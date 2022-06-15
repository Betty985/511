<script setup>
import { useStore } from 'vuex'
import {
  screenfull,
  Hamburger,
  Breadcrumb,
  LanguageSelect,
  ThemePicker,
  headerSearch,
} from '@c'
const store = useStore()
const loginOut = () => {
  store.dispatch('user/loginOut')
}
</script>

<template>
  <div class="navbar">
    <!-- 汉堡 -->
    <Hamburger />
    <!-- 面包屑 -->
    <Breadcrumb class="breadcrumb-container" />
    <div class="right-menu">
      <!-- 搜索 -->
      <headerSearch class="right-menu-item hover-effect" />
      <!-- 全屏 -->
      <screenfull class="right-menu-item hover-effect" />
      <!-- 换肤 -->
      <theme-picker class="right-menu-item hover-effect" />
      <!-- 语言选择 -->
      <LanguageSelect class="right-menu-item hover-effect" />
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
              <el-dropdown-item>{{ $t('navBar.home') }}</el-dropdown-item>
            </router-link>
            <router-link to="/">
              <el-dropdown-item>{{ $t('navBar.profile') }}</el-dropdown-item>
            </router-link>
            <el-dropdown-item divided @click="loginOut">{{
              $t('navBar.logout')
            }}</el-dropdown-item>
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
    ::v-deep .right-menu-item {
      display: inline-block;
      padding: 0 18px 0 0;
      font-size: 24px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
      }
    }
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
