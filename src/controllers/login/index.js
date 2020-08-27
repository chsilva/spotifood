import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { useI18n } from 'react-simple-i18n'

import { getHashParams } from 'utils/functions'
import { LS_ACCESS_TOKEN_KEY, LS_TOKEN_TYPE_KEY, LS_EXPIRES_IN_KEY } from 'settings/constants'
import * as S from './styles'

function LoginController({ history }) {
  const { t } = useI18n()
  useEffect(() => {
    const { access_token, token_type, expires_in } = getHashParams()
    if (access_token && token_type && expires_in) {
      try {
        localStorage.setItem(LS_ACCESS_TOKEN_KEY, access_token)
        localStorage.setItem(LS_TOKEN_TYPE_KEY, token_type)
        localStorage.setItem(LS_EXPIRES_IN_KEY, Math.round(Date.now() / 1000) + parseInt(expires_in))
      } catch (e) {
      } finally {
        history.push('/')
      }
    }
  }, [])

  const onClickLogin = () => {
    const { REACT_APP_SPOTIFY_CLIENT_ID, REACT_APP_REDIRECT_URI } = process.env
    window.location.href = `https://accounts.spotify.com/en/authorize?client_id=${REACT_APP_SPOTIFY_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URI}&response_type=token`
  }

  return (
    <S.Login>
      <h1>LOGIN</h1>
      <button onClick={onClickLogin}>{t('login.button')}</button>
    </S.Login>
  )
}

export default withRouter(LoginController)
