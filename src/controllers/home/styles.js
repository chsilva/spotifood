import styled from 'styled-components'
import media from 'utils/media'

export const Home = styled.section`
  display: flex;
  flex-direction: column;

  padding: 24px;
  width: 1280px;

  ${media.smallerThan.desktop`
    width: 100%;
  `}
`
