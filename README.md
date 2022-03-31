# 511 管理系统

基于最新 VUE 标准的 Script setup 语法标准，最新的响应式变更，组件状态驱动的动态 css,最新的 vue 全家桶。

## 编程规范

- [ eslint](https://eslint.bootcss.com/)
  提供一个插件化的 JavaScript 代码检测工具

- prettier：开箱即用的代码格式化工具，可以直接集成到 vs code,保存时让代码直接符合 eslint `设置-输入save-勾选 format on save `。vs code 一个 tab 默认等于 4 个空格，而 eslint 希望一个 tab 等于 2 个空格。`设置-修改“Editor: Tab Size”为2`

- commitizen:规范化提交代码。`git cz`代替`git commit`
- [git hooks](https://git-scm.com/book/zh/v2/%E8%87%AA%E5%AE%9A%E4%B9%89-Git-Git-%E9%92%A9%E5%AD%90)：git 钩子。需要用到的是 pre-commit 钩子、commit-msg 钩子。可以通过 git commit --no --vertify 绕过
  - pre-commit 钩子在键入提交信息前运行。 它用于检查即将提交的快照，例如，检查是否有所遗漏，确保测试运行，以及核查代码。 如果该钩子以非零值退出，Git 将放弃此次提交，不过你可以用 git commit --no-verify 来绕过这个环节。 你可以利用该钩子，来检查代码风格是否一致（运行类似 lint 的程序）、尾随空白字符是否存在（自带的钩子就是这么做的），或新方法的文档是否适当。
  - commit-msg 钩子接收一个参数，此参数即上文提到的，存有当前提交信息的临时文件的路径。 如果该钩子脚本以非零值退出，Git 将放弃提交，因此，可以用来在提交通过前验证项目状态或提交信息。
- husky：`git hooks`工具。
  - 安装依赖 `npm install husky --save-dev`
  - 启动 husky，生成.husky 文件夹。`npx husky install`
  - 在 package.json 中生成`prepare`指令。`npm set-script prepare "husky install"`
  - 运行 prepare 指令：`npm run prepare`
  - 添加 commitlint 的 hook 到 `husky `中，并在指令 commit-msg 的 hooks 下 执行`npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'`指令。[typicode.github.io](https://typicode.github.io/husky/#/)
- commitlint：校验提交信息。`npm install --save-dev @commitlint/config-conventional @commitlint/cli`（npm 需要 7.x 以上）。然后`echo "module.exports = {extends: ['@commitlint/config-conventional']};" > commitlint.config.js`创建 commitlint.config.js 文件。
- Pre-commit：检测代码提交时的规范。eslint 和 prettier 只能解决本地的代码格式问题。通过`husky`检测`Pre-commit`钩子，在该钩子下执行**npx eslint --ext .js,.vue src**指令进行相关检测。命令为`npx husky add .husky/pre-commit "npx eslint --ext .js,.vue src"`。  
  通过 pre-commit 处理了检测代码的提交规范问题， 当我们进行代码提交时，会检测所有的代码格式规范。
  但是这样会存在两个问题: 1.我们只修改了个别的文件，没有必要检测所有的文件代码格式 2.它只能给我们提示出对应的错误，我们还需要手动的进行代码修改。
- lint-staged:自动格式修复。`npm i lint-staged`只检查本次修改的代码，并在出现问题的时候，自动修复并且推送。
- [svg sprite icon:](https://blog.csdn.net/sweet202005/article/details/123815616)`npm i svg-sprite-loader@6.0.9`
- scss:`npm i sass`
- element-plus:`npm install element-plus --save`或`vue add element-plus`

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

# element-plus

安装`npm install element-plus --save `

# git

## git 规范

[约定式提交](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-guidelines)

## git 命令

### [推送到远程仓库](https://git-scm.com/book/zh/v2/Git-%E5%9F%BA%E7%A1%80-%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93%E7%9A%84%E4%BD%BF%E7%94%A8)

当你想分享你的项目时，必须将其推送到上游。 这个命令很简单：`git push <remote> <branch>`。 当你想要将 master 分支推送到 origin 服务器时（再次说明，克隆时通常会自动帮你设置好那两个名字）， 那么运行这个命令就可以将你所做的备份到服务器：

`$ git push origin master`
只有当你有所克隆服务器的写入权限，并且之前没有人推送过时，这条命令才能生效。 当你和其他人在同一时间克隆，他们先推送到上游然后你再推送到上游，你的推送就会毫无疑问地被拒绝。

### [合并分支](https://git-scm.com/book/zh/v2/Git-%E5%88%86%E6%94%AF-%E5%88%86%E6%94%AF%E7%9A%84%E6%96%B0%E5%BB%BA%E4%B8%8E%E5%90%88%E5%B9%B6)

```js
$ git checkout master
Switched to branch 'master' $
git merge iss53 Merge made by the 'recursive' strategy.
$ git branch -d iss53
```

# [路径别名](https://blog.csdn.net/panchang199266/article/details/90145638)

```json
{
  "compilerOptions": {
    "paths": {
      "@": ["./src"],
      "@c": ["./src/components"]
    }
  },
  "exclude": ["node_modules"]
}
```

# 配置环境变量，封装 axios 模块

根据当前模式不同，设置不同的 baseUrl
