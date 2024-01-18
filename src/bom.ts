// 当前文档在X轴方向滚动的距离
export function scrollXValue(): number {
  if (window.scrollY !== undefined) {
    return window.scrollX
  } else {
    return (
      document.body.scrollLeft ??
      document.documentElement.scrollLeft ??
      window.pageXOffset
    ) // 移动端||PC端
  }
}
// 当前文档在Y轴方向滚动的距离
export function scrollYValue(): number {
  if (window.scrollY !== undefined) {
    return window.scrollY
  } else {
    return (
      document.body.scrollTop ??
      document.documentElement.scrollTop ??
      window.pageYOffset
    ) // 移动端||PC端
  }
}
// 当前视口宽度，包含垂直滚动条宽度
export function viewportWidth(): number {
  return window.innerWidth
}
// 当前视口高度，包含水平滚动条宽度
export function viewportHeight(): number {
  return window.innerHeight
}
// 当前浏览器的宽度
export function browserHeight(): number {
  return window.outerWidth
}
// 当前浏览器的高度
export function browserWidth(): number {
  return window.outerHeight
}
