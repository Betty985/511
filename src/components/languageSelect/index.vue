<script setup>
import { useI18n } from 'vue-i18n'
import { ElMessage } from 'element-plus'
import { useStore } from 'vuex'
import { computed, defineProps } from 'vue'
defineProps({
  effect: {
    type: String,
    default: 'dark',
    validator: function (value) {
      // 这个值必须匹配下列字符串中的一个
      return ['dark', 'light'].indexOf(value) !== -1
    },
  },
})

const store = useStore()
const i18n = useI18n()
const language = computed(() => store.getters.language)
const handleSetLanguage = (lang) => {
  i18n.locale.value = lang
  store.commit('app/setLanguage', lang)
  ElMessage.success(i18n.t('msg.languageChanged'))
}
</script>

<template>
  <el-dropdown
    trigger="click"
    class="international"
    @command="handleSetLanguage"
  >
    <el-tooltip content="国际化" :effect="effect" placement="bottom">
      <div>
        <svg-icon icon="language" />
      </div>
    </el-tooltip>

    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :disabled="language === 'zh'" command="zh"
          >中文</el-dropdown-item
        >
        <el-dropdown-item :disabled="language === 'en'" command="en"
          >English</el-dropdown-item
        >
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style scoped lang="scss"></style>
