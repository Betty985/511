<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { filterRouters, generateMenus } from '@/utils/route'
// 控制是否显示搜索框
const isShow = ref(false)
// el-select实例
const headerSearchSelectRef = ref(null)
const onShowClick = () => {
  isShow.value = !isShow.value
  console.log(headerSearchSelectRef)
}
// search框的值
const search = ref('')
// 搜索方法
const querySearch = () => {
  console.log('搜索')
}
// 选中回调
const onSelectChange = () => {
  console.log('选中')
}
// 检索数据源
const router = useRouter()
const searchPool = computed(() => {
  const filterRoutes = filterRouters(router.getRoutes())
  console.log(generateMenus(filterRoutes))
  return generateMenus(filterRoutes)
})
console.log(searchPool)
</script>

<template>
  <div
    :class="{ show: isShow }"
    class="header-search"
    @click.stop="onShowClick"
  >
    <el-tooltip :content="$t('navBar.headerSearch')">
      <svg-icon calss-name="search-icon" icon="search" />
      <el-select
        ref="headerSearchSelectRef"
        class="header-search-select"
        v-model="search"
        filterable
        default-first-option
        remote
        placeholder="Search"
        :remote-method="querySearch"
        @change="onSelectChange"
        ><el-option
          v-for="option in 5"
          :key="option"
          :label="option"
          :value="option"
        ></el-option>
      </el-select>
    </el-tooltip>
  </div>
</template>

<style scoped lang="scss">
.header-search {
  .search-icon {
    cursor: pointer;
    font-size: 18px;
    vertical-align: middle;
  }
  .header-search-select {
    font-size: 18px;
    transition: width 0.2s;
    width: 0;
    overflow: hidden;
    background: transparent;
    border-radius: 0;
    display: inline-block;
    vertical-align: middle;
  }
  :deep(.el-input__inner) {
    border-radius: 0;
    border: 0;
    padding-left: 0;
    padding-right: 0;
    box-shadow: none !important;
    border-bottom: 1px solid #d9d9d9;
    vertical-align: middle;
  }
  &.show {
    .header-search-select {
      width: 13.125rem;
      margin-left: 10px;
    }
  }
  font-size: 0;
}
</style>
