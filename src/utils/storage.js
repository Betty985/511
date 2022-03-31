/**
 * 存储数据
 * value分为基本数据类型和复杂数据类型
 */
const setItem = (key, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}
/**
 * 获取数据
 */
const getItem = (key) => {
  const data = window.localStorage.getItem(key)
  try {
    return JSON.parse(data)
  } catch (error) {
    return data
  }
}
/**
 *  删除指定数据
 */
const removeItem = (key) => {
  window.localStorage.removeItem(key)
}
/**
 *删除所有数据
 */
const removeAllItems = () => {
  window.localStorage.clear()
}
export { setItem, getItem, removeAllItems, removeItem }
