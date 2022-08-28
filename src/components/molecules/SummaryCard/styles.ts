import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'
import { SummaryCardProps } from './SummaryCard'

const wrapperModifiers = {
  income: (theme: DefaultTheme) => css`
    color: ${theme.color['green-300']};
    svg {
      color: ${theme.color['green-300']};
    }
  `,

  outcome: (theme: DefaultTheme) => css`
    color: ${theme.color['red-300']};
    svg {
      color: ${theme.color['red-300']};
    }
  `,

  total: (theme: DefaultTheme) => css`
    background: ${theme.color['green-700']};
  `,
}

type WrapperProps = Pick<SummaryCardProps, 'variant'>

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, variant }) => css`
    background: ${theme.color['gray-600']};

    border-radius: ${theme.border.radius.soft};
    padding: ${theme.spacing.medium};

    ${!!variant && wrapperModifiers[variant](theme)}
  `}
`

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${theme.color['gray-300']};

    svg {
      font-size: ${theme.font.size.xlarge};
    }
  `}
`

export const Price = styled.strong`
  ${({ theme }) => css`
    display: block;
    margin-top: ${theme.spacing.xsmall};
    font-size: calc(${theme.font.size.large} * 1.5);

    ${media.lessThan('medium')`
      font-size: calc(${theme.font.size.large} * 1.2);
    `}
  `}
`
