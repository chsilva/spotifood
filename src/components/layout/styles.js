import styled from 'styled-components'

export const Layout = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  min-height: 100vh;

  background: ${(props) => props.theme.bgSecondary};
`
