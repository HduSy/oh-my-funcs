// eslint-disable-next-line @typescript-eslint/ban-types
export default function longtouch(el: HTMLElement, cb: Function): void {
  let timer = 0
  let startTime = 0
  let endTime = 0
  el.addEventListener('touchstart', function () {
    if (timer) clearTimeout(timer)
    startTime = +new Date()
    timer = setTimeout(function () {
      cb()
    }, 700)
  })
  el.addEventListener('touchend', function () {
    endTime = +new Date()
    if (endTime - startTime < 700) {
      clearTimeout(timer)
      startTime = 0
      endTime = 0
    }
  })
}
