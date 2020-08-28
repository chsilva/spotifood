import React from 'react'

import * as S from './styles'

function Input(props) {
  return <S.Input debounceTimeout={300} minLength={1} className={props.className} {...props} />
}

export default Input
