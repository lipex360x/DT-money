import styled, { css } from 'styled-components'

import media from 'styled-media-query'

export const Wrapper = styled.section`
  ${() => css`
    width: 100%;
    margin-top: -5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    gap: 2rem;

    ${media.lessThan('medium')`
       grid-template-columns: 1fr;
       gap: 1rem;
    `}
  `}
`
