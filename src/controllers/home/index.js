import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Playlists from 'components/playlists'
import { Creators as PlaylistCreators } from 'state/sagas/playlist'
import * as S from './styles'

function HomeController() {
  const dispatch = useDispatch()
  const { loading, message, playlists } = useSelector((state) => state.playlistState)

  useEffect(() => {
    dispatch(PlaylistCreators.getFeaturedPlaylists())
  }, [])

  return (
    <S.Home>
      <h1>PLAYLISTS</h1>
      <Playlists playlists={playlists} message={message} loading={loading} />
    </S.Home>
  )
}

export default HomeController
