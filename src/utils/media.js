import { css } from 'styled-components'

const BREAKPOINTS = {
  smallerPhone: '320px',
  smallPhone: '420px',
  phone: '600px',
  tablet: '768px',
  bigTablet: '1024px',
  desktop: '1300px',
}

export default {
  smallerThan: Object.keys(BREAKPOINTS).reduce((accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (max-width: ${BREAKPOINTS[label]}) {
        ${css(...args)};
      }
    `
    return accumulator
  }, {}),
  greaterThan: Object.keys(BREAKPOINTS).reduce((accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (min-width: ${BREAKPOINTS[label]}) {
        ${css(...args)};
      }
    `
    return accumulator
  }, {}),
  equalTo: Object.keys(BREAKPOINTS).reduce((accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (width: ${BREAKPOINTS[label]}) {
        ${css(...args)};
      }
    `
    return accumulator
  }, {}),
}
