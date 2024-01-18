/**
 * 时间戳转东八区
 * 引入 serverdate.js 配合服务端下发时间更加精确
 * 使用(window).serverdate获取时间戳
 * @param timestamp
 */
export function timestamp2DateZone8(timestamp: number): Date {
  // timestamp: 接口返回的时间戳
  // 目标时区: 东八区
  const timezone = 8
  // 客户端本地时间和格林威治的时间差，单位为分钟
  const offsetGMT = new Date(timestamp).getTimezoneOffset()
  // 换算到目标时区时间
  const targetDate = new Date(
    timestamp + offsetGMT * 60 * 1000 + timezone * 60 * 60 * 1000
  )
  return targetDate
}

interface ITimeStructure {
  ms?: number | undefined
  s?: number | undefined
  min?: number | undefined
  h?: number | undefined
  day?: number | undefined
}

export function timestampFormat(timestamp: number): ITimeStructure {
  if (!timestamp) return {}
  let t = timestamp
  const ms = t % 1000
  t = (t - ms) / 1000
  if (t < 1) return { ms }
  const s = t % 60 // s
  t = (t - s) / 60
  if (t < 1) return { s, ms }
  const min = t % 60 // min
  t = (t - min) / 60
  if (t < 1) return { min, s, ms }
  const h = t % 24 // h
  t = (t - h) / 24
  if (t < 1) return { h, min, s, ms }
  const day = t // day
  return { day, h, min, s, ms }
}
