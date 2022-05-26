<script setup>
import { defineProps, defineEmits, ref } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
})
const emits = defineEmits(['update:modelValue'])
// 预定义色值
const predefineColors = [
  '#ff4500',
  '#ff8c00',
  '#ffd700',
  '#90ee90',
  '#00ced1',
  '#1e90ff',
  '#c71585',
  'rgba(255, 69, 0, 0.68)',
  'rgb(255, 120, 0)',
  'hsv(51, 100, 98)',
  'hsva(120, 40, 94, 0.5)',
  'hsl(181, 100%, 37%)',
  'hsla(209, 100%, 56%, 0.73)',
  '#c7158577',
]
// 默认色值
const defaultColor = ref(store.getters.mainColor)
// 关闭
const closed = () => {
  emits('update:modelValue', false)
}
//  确定
const comfirm = async () => {
  //  保存最新的主题色
  store.commit('theme/setMainColor', defaultColor.value)
  // 关闭 dialog
  closed()
}
</script>

<template>
  <el-dialog title="提示" :model-value="modelValue" @close="closed" width="20%">
    <div class="center">
      <p class="title">{{ $t('theme.themeColorChange') }}</p>
      <el-color-picker
        v-model="defaultColor"
        :predefine="predefineColors"
      ></el-color-picker>
    </div>
    <template #footer>
      <span class="dialog-footer"
        ><el-button @click="closed">
          {{ $t('universal.cancel') }}
        </el-button>
        <el-button type="primary" @click="comfirm">{{
          $t('universal.confirm')
        }}</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped lang="scss">
.center {
  text-align: center;
  .title {
    margin-bottom: 12px;
  }
}
</style>
