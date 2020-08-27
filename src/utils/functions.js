export const getHashParams = () => {
  const hash = window.location.hash.substring(1)
  const hashObj = {}
  hash.split('&').forEach((it) => {
    const [key, value] = it.split('=')
    hashObj[key] = value
  })

  return hashObj
}
