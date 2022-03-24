# 511 管理系统

基于最新 VUE 标准的 Script setup 语法标准，最新的响应式变更，组件状态驱动的动态 css,最新的 vue 全家桶。

## 编程规范

- [ eslint](https://eslint.bootcss.com/)
  提供一个插件化的 JavaScript 代码检测工具

- prettier：开箱即用的代码格式化工具，可以直接集成到 vs code,保存时让代码直接符合 eslint `设置-输入save-勾选 format on save `。vs code 一个 tab 默认等于 4 个空格，而 eslint 希望一个 tab 等于 2 个空格。`设置-修改“Editor: Tab Size”为2`

- commitizen:规范化提交代码。`git cz`代替`git commit`
- husky
- commitlint
- Pre-commit
- lint-staged
- svg sprite icon

## 项目方案

### 登录架构

- 环境变量处理方案
- 接口模块封装方案
- 请求动态封装方案
- Token 处理方案
- 登录鉴权方案

### layout 架构

- 主动登出方案
- 被动登出方案
- 动态路由表处理方案
- 动态菜单项处理方案
- 动态面包屑处理方案
- 联动处理
- 动画处理

### 后台通用方案

- 国际化处理
- 动态主题处理方案
- 全屏处理方案
- 页面检索处理方案
- TagsView 处理方案
- 功能引导处理方案
- 多组件

### 数据注入导出

- 基于文件选择的 Excel 导入方案
- 基于文件拖拽的 Excel 导入方案
- Excel 数据导出方案

### 权限分控

- RBAC 权限分控系统
- 动态权限设置
- 页面权限处理方案
- 功能权限处理方案

### 表格处理

- 动态表格处理方案
- 拖拽表格处理方案

### 文章编辑器

- 辅助库选择标准
- MarkDown 编辑器处理
- 富文本编辑器处理

### 优化部署

- 打包优化处理方案
- 前端项目部署方案

# git

## git 规范

[约定式提交](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-guidelines)

## git 命令

[推送到远程仓库](https://git-scm.com/book/zh/v2/Git-%E5%9F%BA%E7%A1%80-%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93%E7%9A%84%E4%BD%BF%E7%94%A8)
当你想分享你的项目时，必须将其推送到上游。 这个命令很简单：`git push <remote> <branch>`。 当你想要将 master 分支推送到 origin 服务器时（再次说明，克隆时通常会自动帮你设置好那两个名字）， 那么运行这个命令就可以将你所做的备份到服务器：

`$ git push origin master`
只有当你有所克隆服务器的写入权限，并且之前没有人推送过时，这条命令才能生效。 当你和其他人在同一时间克隆，他们先推送到上游然后你再推送到上游，你的推送就会毫无疑问地被拒绝。
