import React from 'react'

import * as S from './styles'

function PlaylistItem({ item }) {
  const { name, description, images } = item
  const [image] = images

  return (
    <S.PlaylistItem>
      <S.PlaylistItemImage src={image?.url} alt={description} />
      <S.PlaylistItemName>{name}</S.PlaylistItemName>
      <S.PlaylistItemDescription>{description}</S.PlaylistItemDescription>
    </S.PlaylistItem>
  )
}

export default PlaylistItem
