import getQueryVariable from './get-query-param'

const ua = window.navigator.userAgent
// 小屏幕判定，小屏幕需要把一些元素缩小
export const isSmallScreen = (): boolean => {
  return (
    document.body.clientWidth / window.document.documentElement.clientHeight >
    9 / 18.5
  )
}
const mobileRe =
  /Android|webOS|iPhone|iPod|iOS|BlackBerry|Windows Phone|Tablet|Mobile/i
export const isiOS = /iPad|iPhone|iPod/.test(ua)
export const isAndroid = /android|adr|linux/gi.test(ua)
export const isPC = !mobileRe.test(navigator.userAgent)
export const isIphone = /(iPhone\sOS)\s([\d_]+)/i.test(ua)
export const isIpod = /(iPod)(.*OS\s([\d_]+))?/i.test(ua)
export const isIpad = /(iPad).*OS\s([\d_]+)/i.test(ua)
export const isApple = isIphone || isIpad || isIpod
export const isBiliApp = /BiliApp|BiliComic/i.test(ua)
export const isWechat = /MicroMessenger/i.test(ua)
export const isUat =
  window.location.href.includes('uat-') || getQueryVariable('uat') === '1'
export const isPre =
  window.location.href.includes('pre-') || getQueryVariable('pre') === '1'
export const isAndroidPad = ua.includes('mobi_app/android_hd')
export const detectPad =
  !isPC &&
  !isIpad &&
  !isAndroidPad &&
  document.documentElement.clientWidth > 500 // 根据设备经验，认定逻辑宽度 > 500 为平板设备（可能会对大屏手机有误伤）
export const isPad = isIpad || isAndroidPad || detectPad
