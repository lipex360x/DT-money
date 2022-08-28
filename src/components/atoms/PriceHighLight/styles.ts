import styled, { css } from 'styled-components'
import { PriceHighLightProps } from './PriceHighLight'

type WrapperProps = Pick<PriceHighLightProps, 'variant'>

export const Wrapper = styled.span<WrapperProps>`
  ${({ theme, variant }) => css`
    color: ${variant === 'income' ? theme.color['green-300'] : theme.color['red-300']}
  `}
`
