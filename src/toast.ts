export default function toast(text: string, time = 1000): void {
  if (!text || typeof text !== 'string') return
  const toast = document.createElement('div')
  const body = document.body
  toast.innerHTML = text
  const styles = {
    padding: '7px 12px',
    borderRadius: '8px',
    backgroundColor: '#000000',
    color: '#FFFFFF',
    fontSize: '14px',
    textAlign: 'center',
    fontFamily: 'PingFang SC',
    position: 'fixed',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '1000'
  }
  Object.keys(styles).forEach((key: string) => {
    // toast.style.setProperty(key, styles[key])
    // @ts-expect-error
    toast.style[key] = styles[key]
  })
  body.appendChild(toast)
  const timer = setTimeout(() => {
    body.removeChild(toast)
    clearTimeout(timer)
  }, time)
}
