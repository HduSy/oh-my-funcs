export default async function img2base64(url: string): Promise<unknown> {
  return await new Promise<unknown>((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('get', url, true)
    // 至关重要
    xhr.responseType = 'blob'
    xhr.onload = function () {
      if (xhr.status === 200) {
        const blob = xhr.response as Blob
        const fileReader = new FileReader()
        fileReader.addEventListener('loadend', () => {
          const base64 = fileReader.result
          resolve(base64)
        })
        fileReader.readAsDataURL(blob)
      }
    }
    xhr.send()
    xhr.onerror = (e) => {
      console.warn(`图片地址${url}转换失败`)
      reject(e)
    }
  })
}
