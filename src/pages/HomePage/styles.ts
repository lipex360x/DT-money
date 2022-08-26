import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-size: ${theme.font.size.small};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.size.medium}
    `}
  `}
`
