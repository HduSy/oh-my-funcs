export default async function video2blob(url: string): Promise<unknown> {
  return await new Promise<unknown>((resolve) => {
    const xhr = new XMLHttpRequest()
    xhr.open('get', url)
    xhr.responseType = 'blob'
    xhr.onload = () => {
      resolve(xhr.response)
    }
    xhr.send()
  })
}
