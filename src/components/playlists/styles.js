import styled from 'styled-components'
import media from 'utils/media'

export const SpinnerWrapper = styled.div`
  width: 48px;
  height: 48px;
`

export const PlaylistsMessage = styled.span``

export const Playlists = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-column-gap: 24px;
  grid-row-gap: 24px;

  ${media.smallerThan.tablet`
    grid-template-columns: repeat(3, minmax(0, 1fr));
  `}

  ${media.smallerThan.phone`
    grid-template-columns: repeat(2, minmax(0, 1fr));
  `}

  ${media.smallerThan.smallerPhone`
    grid-template-columns: repeat(1, minmax(0, 1fr));
  `}
`
