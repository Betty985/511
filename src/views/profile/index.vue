<script setup>
import { onMounted, ref } from 'vue'
import PCard from './src/components/PCard.vue'
import Layout from './src/components/Layout.vue'
const data = ref([])
function init() {
  data.value = Array.from({ length: 4 }).map((_, index) => {
    return {
      name: index,
    }
  })
}
onMounted(() => {
  init()
})
</script>

<template>
  <Layout
    class="w-full"
    :option="{ xs: '24', sm: '12', md: '6', lg: '6', xl: '6' }"
  >
    <PCard :height="172" v-for="(item, index) in data" :key="index">
      {{ item.name }}
    </PCard>
  </Layout>
</template>

<style scoped lang="scss">
.w-full {
  width: 100%;
}
.grid {
  display: grid;
}
.cols-4 {
  grid-template-columns: repeat(4, minmax(200px, 1fr));
}
.cols-3 {
  grid-template-columns: repeat(3, minmax(200px, 1fr));
}

.gaps {
  grid-gap: 20px;
}
.box {
  height: 200px;
}
.mb-18 {
  margin-bottom: 18px;
}
</style>
