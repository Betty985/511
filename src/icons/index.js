// 导入所有图标
// 完成svgIcon的全局注册
// https://webpack.docschina.org/guides/dependency-management/
import SvgIcon from './../components/svgIcon'
const svgRequire = require.context('./svg', false, /\.svg$/)
// 一个 context module 会导出一个（require）函数，此函数可以接收一个参数：request。
// 此导出函数有三个属性：resolve, keys, id
// 获得图标
// 把图标作为request参数传入svgRequire导入函数中，完成本地svg的导入
svgRequire.keys().forEach((svgIcon) => svgRequire(svgIcon))
export default (app) => {
  app.component('svg-icon', SvgIcon)
}
