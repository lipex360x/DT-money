import styled, { css } from 'styled-components'

export const Wrapper = styled.table`
  ${({ theme }) => css`
    margin-top: 4rem;
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;

    td {
      padding: 1.25rem 2rem;
      background: ${theme.color['gray-700']};

      &:first-child{
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
      }

      &:last-child{
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
      }
    }
  `}
`

type PriceHighLightProps = {
  variant: 'income' | 'outcome'
}

export const PriceHighLight = styled.span<PriceHighLightProps>`
  ${({ theme, variant }) => css`
    color: ${variant === 'income' ? theme.color['green-300'] : theme.color['red-300']}
  `}
`
