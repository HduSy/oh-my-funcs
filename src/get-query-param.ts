export default function getQueryVariable(key: string): string {
  let result = ''
  window.location.search
    .substring(1)
    .split('&')
    .forEach((query: string) => {
      const kv = query.split('=')
      if (decodeURIComponent(kv[0]) === key) {
        result = decodeURIComponent(kv[1])
      }
    })
  return result
}
