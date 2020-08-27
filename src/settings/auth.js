import { LS_ACCESS_TOKEN_KEY, LS_TOKEN_TYPE_KEY, LS_EXPIRES_IN_KEY } from 'settings/constants'

export default function () {
  const access_token = localStorage.getItem(LS_ACCESS_TOKEN_KEY)
  const token_type = localStorage.getItem(LS_TOKEN_TYPE_KEY)
  const expires_in = localStorage.getItem(LS_EXPIRES_IN_KEY)

  if (!access_token || !token_type || !expires_in) return false
  if (parseInt(expires_in) <= Math.round(Date.now() / 1000)) {
    localStorage.clear()
    return false
  }

  return true
}
