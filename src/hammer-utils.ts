import Hammer from 'hammerjs'

// 左滑手势
export function onSwipeLeft(el: HTMLElement, cb: HammerListener) {
  const mc = new Hammer(el)
  mc.on('swipeleft', cb)
}
// 右滑手势
export function onSwipeRight(el: HTMLElement, cb: HammerListener) {
  const mc = new Hammer(el)
  mc.on('swiperight', cb)
}
