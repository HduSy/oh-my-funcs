export default function px2rem(
  H5: boolean,
  val: string | number,
  rootValue: number
): string {
  if (val === '' || val === '0px') return val
  if (val === 0) return `${val}px`
  if (typeof val === 'string') {
    if (H5) return `${parseFloat(val) / rootValue}rem`
    return val
  } else {
    if (H5) return `${val / rootValue}rem`
    return `${val}px`
  }
}
