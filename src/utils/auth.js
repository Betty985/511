import { getItem, setItem } from './storage'
import { TIME_STAMP, TOKEN_TIMEOUT } from '@/constant'
/**
 * 获取时间戳
 */
function getTimeStamp() {
  return getItem(TIME_STAMP)
}
/**
 * 设置时间戳
 */
function setTimeStamp() {
  setItem(TIME_STAMP, Date.now())
}
/**
 * 是否超时
 */
function isTimeout() {
  // 当前时间
  const currentTime = Date.now()
  // 登录时间
  const timestamp = getTimeStamp()
  return currentTime - timestamp > TOKEN_TIMEOUT
}
export { getTimeStamp, setTimeStamp, isTimeout }
