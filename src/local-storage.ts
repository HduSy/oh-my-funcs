export function getLSData(storeKey: string): Record<string, unknown> {
  const dataStr = localStorage.getItem(storeKey) ?? '{}'
  try {
    return JSON.parse(dataStr)
  } catch (e) {
    return {}
  }
}

export function updateLSD(storeKey: string, key: string, value: unknown): void {
  const preData = getLSData(storeKey)
  const data = {
    ...preData,
    [key]: value
  }
  try {
    localStorage.setItem(storeKey, JSON.stringify(data))
  } catch (e) {
    console.error(e)
  }
}
