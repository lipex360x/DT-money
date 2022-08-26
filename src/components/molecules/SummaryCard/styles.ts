import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'
import { SummaryCardProps } from './SummaryCard'

const wrapperModifiers = {
  gray: (theme: DefaultTheme) => css`
    background: ${theme.color['gray-600']};
  `,

  green: (theme: DefaultTheme) => css`
    background: ${theme.color['green-700']};
  `
}

type WrapperProps = Pick<SummaryCardProps, 'variant'>

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, variant }) => css`

    border-radius: ${theme.border.radius.soft};
    padding: ${theme.spacing.medium};

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: ${theme.color['gray-300']}
    }

    strong {
      display: block;
      margin-top: ${theme.spacing.xsmall};
      font-size: calc(${theme.font.size.large} * 1.5);

      ${media.lessThan('medium')`
        font-size: calc(${theme.font.size.large} * 1.2);
      `}
    }

    ${wrapperModifiers[variant!](theme)}
  `}
`
