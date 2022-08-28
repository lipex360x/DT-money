import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from './Button'

export type WrapperProps = {
  hasIcon: boolean
} & ButtonProps

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    padding: 0.5rem 1.25rem;
  `,

  medium: (theme: DefaultTheme) => css`
    padding: 0.75em 1.25rem;
  `,

  large: (theme: DefaultTheme) => css`
    padding: 1em 2rem;
  `,

  withIcon: (theme: DefaultTheme) => css`
  svg {
      width: 1.5rem;
      & + span {
        margin-left: ${theme.spacing.xxsmall};
      }
    }
  `,

  green: (theme: DefaultTheme) => css`
    background: ${theme.color['green-500']};

    &:hover {
      background: ${theme.color['green-700']};
    }
  `,

  gray: (theme: DefaultTheme) => css`
    background: ${theme.color['gray-700']};

    &:hover {
      background: ${theme.color['gray-900']};
    }
  `,

  red: (theme: DefaultTheme) => css`
    background: ${theme.color['red-500']};

    &:hover {
      background: ${theme.color['red-700']};
    }
  `,

  svgColor: (theme: DefaultTheme, variant: 'income' | 'outcome') => css`
    svg {
      color: ${variant === 'income' ? theme.color['green-300'] : theme.color['red-300']}
    }
  `,

  minimal: (theme: DefaultTheme) => css`
    background: none;
    color: ${theme.color['green-300']};
    border: 2px solid ${theme.color['green-300']};
    transition: border-color ${theme.transition.fast};

    &:hover {
      border-color: ${theme.color['green-500']};
      background: none;
    }
  `,

  fullWidth: () => css`
    flex: 1;
    text-align: center;
  `,
}

export const ButtonBase = styled.button`
  ${({ theme }) => css`
    display: inline-flex;
    justify-content: center;
    align-items: center;

    color: ${theme.color.white};
    font-weight: ${theme.font.bold};

    border-radius: ${theme.border.radius.soft};
    transition: background-color ${theme.transition.fast};
  `}
`

export const Wrapper = styled(ButtonBase) <WrapperProps>`
  ${({
  theme,
  size,
  fullWidth,
  hasIcon,
  minimal,
  backgroundColor,
  variant
}) => css`
    ${!!backgroundColor && wrapperModifiers[backgroundColor](theme)}
    ${!!size && wrapperModifiers[size](theme)}
    ${!!hasIcon && wrapperModifiers.withIcon(theme)}
    ${!!minimal && wrapperModifiers.minimal(theme)}
    ${!!fullWidth && wrapperModifiers.fullWidth}
    ${!!variant && wrapperModifiers.svgColor(theme, variant)}
  `}
`
