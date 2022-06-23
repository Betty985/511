import path from 'path'
import i18n from '@/i18n'
/**
 * 筛选出可供搜索的路由对象
 *
 */
export const generateRoutes = (routes, basePath = '/', prefixTitle = []) => {
  // result数据
  let res = []
  // 循环routes路由
  for (const route of routes) {
    // 创建包含path和title的item
    const data = {
      path: path.resolve(basePath, route.path),
      title: [...prefixTitle],
    }
    // 当前存在meta时，使用i18n解析国际化数据，组合成新的title内容
    // 动态路由不允许被搜索
    // 匹配动态路由的正则
    const re = /.*\/:.*/
    if (route?.meta?.title && re.exec(route.path)) {
      const i18ntitle = i18n.global.t(`route.${route.meta.title}`)
      data.title = [...data.title, i18ntitle]
      res.push(data)
    }
    // 存在子路由时迭代调用
    if (route.children) {
      const tempRoutes = generateRoutes(route.children, data.path, data.title)
      res = tempRoutes.length > 0 ? [...res, ...tempRoutes] : res
    }
  }
  return res
}
