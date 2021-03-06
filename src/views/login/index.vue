<script setup>
import svgIcon from '@/components/svgIcon/index.vue'
import langSelect from '@/components/languageSelect/index.vue'
import motion from '@/components/motion/index.vue'
import { ref } from 'vue'
import { validatePassword } from './rules'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'

const i18n = useI18n()
// 数据源
const loginForm = ref({
  userName: 'super',
  password: 123456,
})
// 验证规则
const loginRules = ref({
  userName: [
    {
      required: true,
      trigger: 'blur',
      message: i18n.t('login.usernameRule'),
    },
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      validator: validatePassword(),
    },
  ],
})
// 密码框文本显示
const passwordType = ref('password')
function changePwdType() {
  if (passwordType.value === 'password') {
    passwordType.value = 'text'
  } else {
    passwordType.value = 'password'
  }
}
// 处理登录
const loading = ref(false)
const store = useStore()
const LoginRef = ref(null)
const handlerLogin = () => {
  // 进行表单校验
  // console.log(LoginRef.value)
  LoginRef.value.validate((valid) => {
    if (!valid) return
    // 触发登录动作
    loading.value = true
    // 进行登录处理
    store
      .dispatch('user/login', loginForm.value)
      .then(() => {
        loading.value = false
      })
      .catch((err) => {
        console.log(err)
        loading.value = false
      })
  })
}
</script>

<template>
  <div class="login-container">
    <el-form
      class="login-form"
      :model="loginForm"
      :rules="loginRules"
      ref="LoginRef"
    >
      <div class="title-container">
        <h3 class="title">{{ $t('login.title') }}</h3>
        <lang-select class="lang-select" effect="light"></lang-select>
      </div>
      <!-- username -->
      <motion
        ><el-form-item prop="userName">
          <span class="svg-container">
            <svg-icon icon="user"></svg-icon>
          </span>
          <el-input
            placeholder="userName"
            name="userName"
            type="text"
            v-model="loginForm.userName"
          ></el-input> </el-form-item
      ></motion>

      <!-- password -->
      <motion :delay="200"
        ><el-form-item prop="password">
          <span class="svg-container">
            <svg-icon icon="password"></svg-icon>
          </span>
          <el-input
            placeholder="password"
            name="password"
            :type="passwordType"
            v-model="loginForm.password"
          ></el-input>
          <span class="show-pwd" @click="changePwdType">
            <span class="svg-container">
              <svg-icon
                :icon="passwordType === 'password' ? 'eye' : 'eye-open'"
              ></svg-icon>
            </span>
          </span> </el-form-item
      ></motion>

      <!-- 登录按钮 -->
      <motion :delay="300"
        ><el-button
          type="primary"
          style="width: 100%; margin-bottom: 30px"
          :loading="loading"
          @click="handlerLogin"
          >{{ $t('login.loginBtn') }}</el-button
        ></motion
      >
      <div class="tips" v-html="$t('login.desc')"></div>
    </el-form>
  </div>
</template>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;

    ::v-deep .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
    // 深度选择器
    ::v-deep .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;

      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        // 光标颜色
        caret-color: $cursor;
      }
    }
  }

  .tips {
    font-size: 16px;
    line-height: 28px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }

    ::v-deep .lang-select {
      position: absolute;
      top: 4px;
      right: 0;
      background-color: white;
      font-size: 22px;
      padding: 4px;
      border-radius: 4px;
      cursor: pointer;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
