export default function video2blob(url: string) {
  return new Promise<Blob>(resolve => {
    const xhr = new XMLHttpRequest()
    xhr.open('get', url)
    xhr.responseType = 'blob'
    xhr.onload = () => resolve(xhr.response)
    xhr.send()
  })
}
