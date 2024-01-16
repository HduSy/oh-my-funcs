/**
 * imgUrl转base64
 * @param url
 */
export default function img2base64(url: string) {
  return new Promise<any>((resolve, reject)=>{
    const xhr = new XMLHttpRequest()
    xhr.open('get', url, true)
    // 至关重要
    xhr.responseType = 'blob'
    xhr.onload = function() {
      if (this.status === 200) {
        const blob = this.response
        console.log('blob', blob)
        const oFileReader = new FileReader()
        oFileReader.onloadend = function(e) {
          // @ts-ignore
          const base64 = e.target.result
          resolve(base64)
        }
        oFileReader.readAsDataURL(blob)
      }
    }
    xhr.send()
    xhr.onerror = e => {
        console.warn(`图片地址${url}转换失败`)
        reject(e)
    }
  })
}
