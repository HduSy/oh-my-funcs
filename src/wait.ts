export default async function wait(time = 1000): Promise<boolean> {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, time)
  })
}
