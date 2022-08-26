import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    background: ${theme.color['gray-900']};
    padding: 2.5rem 0 7.5rem;
  `}
`

export const Content = styled.section`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`
