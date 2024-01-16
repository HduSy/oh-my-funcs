/**
 * custom localStorage
 */
import { compressToBase64, decompressFromBase64 } from 'lz-string'

export function getLSData(storeKey: string) {
  const dataStr = decompressFromBase64(localStorage.getItem(storeKey) || '') || '{}'
  try {
      return JSON.parse(dataStr)
  } catch (e) {
      return {}
  }
}

export function updateLSD(storeKey: string, key: string, value: any) {
  const preData = getLSData(storeKey)
  const data = {
      ...preData,
      [key]: value,
  }
  try {
      localStorage.setItem(storeKey, compressToBase64(JSON.stringify(data)))
  } catch (e) {
      console.log(e)
  }
}
