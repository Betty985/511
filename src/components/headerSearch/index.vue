<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import Fuse from 'fuse.js'
import { generateRoutes } from './FuseData'
import { filterRouters } from '@/utils/route'
// 控制是否显示搜索框
const isShow = ref(false)
// el-select实例
const headerSearchSelectRef = ref(null)
const onShowClick = () => {
  isShow.value = !isShow.value
  headerSearchSelectRef.value.focus()
}
// search框的值
const search = ref('')
// 搜索结果
const searchOptions = ref([])
// 搜索方法
const querySearch = (query) => {
  if (query !== '') {
    searchOptions.value = fuse.search(query)
  } else {
    searchOptions.value = []
  }
}
// 选中回调
const onSelectChange = (val) => {
  router.push(val.path)
}
// 检索数据源
const router = useRouter()
const searchPool = computed(() => {
  const filterRoutes = filterRouters(router.getRoutes())
  return generateRoutes(filterRoutes)
})
/**
 * 搜索库相关
 */
const fuse = new Fuse(searchPool.value, {
  // 是否按优先级进行排序
  shouldSort: true,
  // 匹配长度最小值
  minMatchCharLength: 1,
  // 将被搜索的键列表。 这支持嵌套路径、加权搜索、在字符串和对象数组中搜索。
  // name：搜索的键
  // weight：对应的权重
  keys: [
    {
      name: 'title',
      weight: 0.7,
    },
    {
      name: 'path',
      weight: 0.3,
    },
  ],
})
</script>

<template>
  <el-tooltip :content="$t('navBar.headerSearch')">
    <div
      @click.stop="onShowClick"
      class="header-search"
      :class="{ show: isShow }"
    >
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
          v-for="option in searchOptions"
          :key="option.item.path"
          :label="option.item.title.join('>')"
          :value="option.item"
        ></el-option>
      </el-select>
    </div>
  </el-tooltip>
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
  & .show {
    .header-search-select {
      width: 13.125rem;
      margin-left: 10px;
    }
  }
  font-size: 0;
}
</style>
