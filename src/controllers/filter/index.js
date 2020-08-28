import React from 'react'
import { useI18n } from 'react-simple-i18n'

import * as S from './styles'

function FilterController() {
  const { t } = useI18n()
  return <S.Filter>{t('home.filter.title')}</S.Filter>
}

export default FilterController
