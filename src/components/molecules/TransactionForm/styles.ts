import styled, { css, DefaultTheme } from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group';

const buttonModifiers = {
  income: (theme: DefaultTheme) => css`
    background: ${theme.color['green-700']};
  `,

  outcome: (theme: DefaultTheme) => css`
    background: ${theme.color['red-700']};
  `,

  svgColor: (theme: DefaultTheme, variant: 'income' | 'outcome') => css`
    svg {
      color: ${variant === 'income' ? theme.color['green-300'] : theme.color['red-300']}
    }
  `,
}

export const Form = styled.form`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `}
`

export const TransactionType = styled(RadioGroup.Root)`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1rem;
  `}
`

type TransactionTypeButtonProps = {
  variant: 'income' | 'outcome'
}

export const TransactionTypeButton = styled(RadioGroup.Item) <TransactionTypeButtonProps>`
  ${({ theme, variant }) => css`
    display: inline-flex;
    flex:1;
    justify-content: center;
    align-items: center;
    padding: 0.75em 1.25rem;

    color: ${theme.color.white};
    font-weight: ${theme.font.bold};

    border-radius: ${theme.border.radius.soft};
    transition: background-color ${theme.transition.fast};

    background: ${theme.color['gray-700']};

    svg {
      font-size: 1.5rem;
      & + span {
        margin-left: ${theme.spacing.xxsmall};
      }
    }

    &:hover {
      background: ${theme.color['gray-600']};
    }

    ${!!variant && buttonModifiers.svgColor(theme, variant)}

    &[data-state='checked'] {
      svg {
        color: ${theme.color.white}
      }
      ${!!variant && buttonModifiers[variant](theme)}
    }
  `}
`
