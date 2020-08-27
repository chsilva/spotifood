import styled from 'styled-components'

export const Layout = styled.main`
  display: flex;
  flex-direction: column;

  width: 100vw;
  min-height: 100vh;

  background: ${(props) => props.theme.bgPrimary};
`
