type TCallbackFn = () => void;
const callbackList: TCallbackFn[] = []
let lastVisibilityState: string

function pageResumeHandler() {
  const vState = document.visibilityState
  if (lastVisibilityState === 'hidden' && vState === 'visible') {
    for (let i = 0; i < callbackList.length; i++) {
      callbackList[i]()
    }
  }
  lastVisibilityState = vState
}

/**
 * 在页面离开又回来的时候触发事件
 * @param callback
 */
export default function onPageResume(callback: TCallbackFn) {
  if (callbackList.length === 0) {
    document.removeEventListener('visibilitychange', pageResumeHandler, false)
    document.addEventListener('visibilitychange', pageResumeHandler, false)
  }
  callbackList.push(callback)
}
