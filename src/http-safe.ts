export default function httpSafe(val: string): string {
  if (location.protocol.includes('https')) {
    return (val + '').replace(/^(http:)?\/\//, 'https://')
  }
  if (/^\/\//.test(val)) {
    return `${location.protocol}${val}`
  }
  return val
}
