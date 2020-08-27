import styled from 'styled-components'
import media from 'utils/media'

export const PlaylistItem = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`
export const PlaylistItemName = styled.p`
  margin-top: 8px;
`

export const PlaylistItemDescription = styled.span`
  overflow-wrap: break-word;
  font-size: 0.7em;
  color: ${(props) => props.theme.textSecondary};
`

export const PlaylistItemImage = styled.img`
  width: 100%;
  height: auto;

  filter: brightness(0.4);
  transition: transform 0.175s ease, filter 0.175s ease;

  &:hover {
    transform: scale(1.05);
    filter: brightness(1);
  }

  ${media.smallerThan.tablet`
    filter: brightness(1);
  `}
`
