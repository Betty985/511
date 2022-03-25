# vue3 新特性

## Composition API

vue2 的 options API
优点：方便、易学、清晰  
缺点：组件变得复杂时，组件的可读性会变得越来越差

vue3 的 Composition API
定义数据与使用数据放在一起进行处理，以达到更加易读、更加方便扩展的目的。

## 响应式变更

[vue2](https://cn.vuejs.org/v2/guide/reactivity.html)
由于 JavaScript 的限制，Vue 不能检测数组和对象的变化。尽管如此我们还是有一些办法来回避这些限制并保证它们的响应性。
Vue 无法检测 property 的添加或移除。由于 Vue 会在初始化实例时对 property 执行 getter/setter 转化，所以 property 必须在 data 对象上存在才能让 Vue 将它转换为响应式的。

### Vue2 不能检测以下数组的变动：

- 当你利用索引直接设置一个数组项时，例如：vm.items[indexOfItem] = newValue
- 当你修改数组的长度时，例如：vm.items.length = newLength。

#### 解决

- vue 设置了 7 个变异数组（ push 、 pop 、 shift 、 unshift 、 splice 、 sort 、 reverse ）的 hack 方法来解决问题。
- `Vue.set`

#### 原因

（把数组的下标当做对象的属性）`Object.defineProperty`可以监测到数组和下标的变化。

> "因为性能问题。性能代价和获得的用户体验收益不成正比"。——尤雨溪

### vue3 的 proxy

Object.defineProperty 和 Proxy 本质差别是，defineProperty 只能对属性进行劫持，所以出现了需要递归遍历，新增属性需要手动 Observe 的问题。Proxy 直接代理对象，不需要遍历操作。此外，Proxy 支持 13 种拦截操作

## 新的 TS 支持

为了防止随着应用的增长，而产生的许多潜在的运行时静态类型的错误，vue3 使用 typescript 进行了重构。TS 的优势在于静态类型检查和环境声明。

## Vite

vite 的作用其实和 webpack 是一样的，都是一个前端构建工具。它区别于 webpack 的地方在于它完全使用了 ES Module 的特性，可以无需预先打包，而是采用实时编译的方式。这样让它具备了远高于 webpack 的启动速度和热更新速度。

因为 vite 完全依赖 ES Module 就导致了它无法直接对 comonJS 的模块化方式进行支持，必须得采用依赖预构建的形式。

# 差别

- vue3 使用按需导入的形式进行初始化操作
- template 标签中支持多个根标签

## main.js

- 通过按需导入的 createApp 方法来构建 vue 实例
- 通过 vue 实例.use 方法来挂载插件
- 没有 vue 构造方法，无法挂载原型

  vue2

```js
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from ' ./ store '
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
```

vue3

```js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from ' ./ store'
const app = createApp(App)
app.use(store).use(router).mount('#app')
```

## App.vue

vue3 中支持多个根标签

## vuex

- 按需导入的 createStore 方法构建 store 实例
- 无需通过 Vue.use(Vuex)的形式进行挂载

vue2

在一个模块化的打包系统中，必须显式地通过 Vue.use() 来安装 [Vuex](https://v3.vuex.vuejs.org/zh/installation.html#npm)

```js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++
    },
  },
})
```

vue3

创建过程直截了当——仅需要提供一个初始 state 对象和一些 mutation

```js
import { createStore } from 'vuex'

// 创建一个新的 store 实例
const store = createStore({
  state() {
    return {
      count: 0,
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
  },
})
```

## vue-router

- 通过按需导入的 createRouter 方法来构建 router 实例
- 通过按需导入的 createWebHashHistory 方法来创建 hash 模式对象，进行路由模式指定
- 无需再通过 Vue.use(VueRouter)的形式进行挂载
- routes 路由表的定义无差别

vue2

```js
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = []
const router = new VueRouter({
  mode: 'history',
  routes,
})
export default router
```

vue3

```js
import { createRouter, createWebHistory } from 'vue-router'
const routes = []
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
```

# 参考资料

- [为什么 vue 没有提供对数组属性的监听 · Issue #8562 · vuejs/vue (github.com)](https://github.com/vuejs/vue/issues/8562)
- [为什么 Vue3.0 使用 Proxy 实现数据监听(defineProperty 表示不背这个锅)*vue.js*脚本之家 (jb51.net)](https://www.jb51.net/article/171869.htm)
- [Proxy - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
