import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from './Button'

export type WrapperProps = {
  hasIcon: boolean
} & Pick<ButtonProps, 'size' | 'fullWidth' | 'minimal'>

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

  minimal: (theme: DefaultTheme) => css`
    background: none;
    color: ${theme.color['green-300']};
    border: 2px solid ${theme.color['green-300']}
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, hasIcon, minimal }) => css`
    display: flex;
    align-items: center;

    color: ${theme.color.white};
    background: ${theme.color['green-500']};

    font-weight: ${theme.font.bold};
    border-radius: ${theme.border.radius.soft};
    transition: background-color ${theme.transition.fast};

    &:hover {
      background: ${theme.color['green-700']};
    }

    ${!!size && wrapperModifiers[size](theme)}
    ${!!hasIcon && wrapperModifiers.withIcon(theme)}
    ${!!minimal && wrapperModifiers.minimal(theme)}
  `}
`
