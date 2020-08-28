import React from 'react'
import PropTypes from 'prop-types'

import PlaylistItem from 'components/playlists/playlistItem'
import Spinner from 'components/spinner'
import * as S from './styles'

function Playlists({ loading, message, playlists, search }) {
  const hasPlaylists = Object.keys(playlists).length > 0

  if (!hasPlaylists || loading) {
    return (
      <S.SpinnerWrapper>
        <Spinner />
      </S.SpinnerWrapper>
    )
  }

  return (
    <>
      <S.PlaylistsMessage>{message}</S.PlaylistsMessage>
      <S.Playlists>
        {playlists.items.map((item) => {
          if (search) {
            return (
              (item.name.toLowerCase().indexOf(search) >= 0 || item.description.toLowerCase().indexOf(search) >= 0) && (
                <PlaylistItem item={item} key={item.id} />
              )
            )
          }

          return <PlaylistItem item={item} key={item.id} />
        })}
      </S.Playlists>
    </>
  )
}

Playlists.propTypes = {
  loading: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  playlists: PropTypes.object.isRequired,
}

export default Playlists
