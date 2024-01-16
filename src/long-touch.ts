/**
 * H5长按事件
 * @param el
 * @param cb
 */
export default function longtouch(el: HTMLElement, cb: Function) {
  let timer = 0
  let startTime = 0
  let endTime = 0
  el.addEventListener('touchstart', function() {
    if(timer) clearTimeout(timer)
    startTime = +new Date()
    timer = setTimeout(function() {
      cb()
    }, 700)
  })
  el.addEventListener('touchend', function() {
    endTime = +new Date()
    if (endTime - startTime < 700) {
      clearTimeout(timer)
      startTime = 0
      endTime = 0
    }
  })
}
