export default function getMetaVariable(key: string): string {
  const metas = document.getElementsByTagName('meta')
  for (let i = 0; i < metas.length; i++) {
    if (metas[i].getAttribute('name') === key) {
      return metas[i].getAttribute('content') ?? ''
    }
  }
  return ''
}
