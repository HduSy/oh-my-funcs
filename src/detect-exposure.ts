import toast from "./toast"

export default function detectExposure(selector: string, callback: Function, top: number, bottom: number): boolean| void {
  if (typeof window === 'undefined') return false
  const taregtEl = document.querySelector(selector)
  if(!taregtEl) {
    toast(`目标元素 ${selector} 不存在`)
    return false
  }
  if (window.IntersectionObserver) {
    const observer = new IntersectionObserver((entries:IntersectionObserverEntry[], ob:IntersectionObserver) => {
      entries.forEach((entry:IntersectionObserverEntry) => {
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          callback&&callback()
          ob.unobserve(taregtEl)
        }
      })
    }, {
      root: null,
      rootMargin: `${top}px 0px ${bottom}px 0px`,
      threshold: 0,
    })
    observer.observe(taregtEl)
  } else {
    const checkInView = (el: Element) => {
      if (!el) return false
      const rect = el.getBoundingClientRect()
      return (
        rect.top < window.innerHeight &&
        rect.right > 0 &&
        rect.bottom > 0 &&
        rect.left < window.innerWidth
      )
    }
    const getScrollParent = (el: Element| null) => {
      if (!el) return null
      while (el && el.tagName !== 'HTML' && el.tagName !== 'BODY' && el.nodeType === 1) {
        const overflowY = window.getComputedStyle(el).overflowY
        if (overflowY === 'scroll' || overflowY === 'auto') {
          // 好像是非必要的
          if (el.tagName === 'HTML' || el.tagName === 'BODY') {
            return document
          }
          return el
        }
        el = el.parentElement
      }
      return document
    }
    if (checkInView(taregtEl)) {
      callback && callback()
      return true
    } else {
      const parent = getScrollParent(taregtEl)
      if(!parent) return false
      const handleChange = () => {
        if (checkInView(taregtEl)) {
          callback && callback()
          parent.removeEventListener('resize', handleChange)
          parent.removeEventListener('scroll', handleChange)
        }
      }
      parent.addEventListener('resize', handleChange, false)
      parent.addEventListener('scroll', handleChange, false)
    }
  }
}