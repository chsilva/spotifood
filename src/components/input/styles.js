import styled from 'styled-components'
import ReactDebounceInput from 'react-debounce-input'

export const Input = styled(ReactDebounceInput)`
  width: 300px;
  height: 32px;
  padding-left: 4px;

  &:focus {
    outline-color: ${(props) => props.theme.primary};
  }
`
