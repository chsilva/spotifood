import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useI18n } from 'react-simple-i18n'

import Filter from 'controllers/filter'
import Input from 'components/input'
import Playlists from 'components/playlists'
import { Creators as PlaylistCreators } from 'state/sagas/playlist'
import * as S from './styles'

function HomeController() {
  const { t } = useI18n()
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')
  const { loading, message, playlists, filters } = useSelector((state) => state.playlistState)

  useEffect(() => {
    dispatch(PlaylistCreators.getFeaturedPlaylists())
  }, [])

  const onChangeSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <S.Home>
      <h1>{t('home.title')}</h1>
      <Input value={search} onChange={onChangeSearch} />
      <Filter filters={filters} />
      <Playlists search={search} playlists={playlists} message={message} loading={loading} />
    </S.Home>
  )
}

export default HomeController
