import styled, { keyframes } from 'styled-components'

const spinnerKeyframe = keyframes`
  to {
    transform: rotate(360deg);
  }
`

export const Spinner = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 50%;
  background: transparent;
  border: 4px solid ${(props) => props.theme.bgTerciary};
  border-left-color: ${(props) => props.theme.primary};
  border-top-color: ${(props) => props.theme.primary};
  animation: ${spinnerKeyframe} 0.5s linear infinite;
`
