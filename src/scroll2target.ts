// fixed ios无法平滑滚动
import SmoothScroll from 'smooth-scroll'
import smoothscroll from 'smoothscroll-polyfill'
import toast from './toast'
smoothscroll.polyfill()
/**
 * 滚动到指定元素ID
 * @param targetId 元素id
 * @param type 平台 h5|pc
 * @param justify 修正量
 */
export default function scroll2target(type: 'h5'|'pc', targetId: string, justify = 0) {
  const el = document.getElementById(targetId)
  if (!el) return toast('滚动元素不存在')
  if (type==='h5') {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
    const y = el.getBoundingClientRect().top + scrollTop
    window.scrollTo({
      left: 0,
      top: y + justify,
      behavior: 'smooth',
    })
  } else {
    const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 1000,
      offset: justify,
      updateURL: false, // Update the URL on scroll
      popstate: false,
    })
    scroll.animateScroll(el)
  }
}
