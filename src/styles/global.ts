import { css, createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    body {
      color: ${theme.color.white};
      background: ${theme.color.black};
    }

    :focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${theme.color['gray-600']};
    }

    body,
    input,
    textarea,
    button {
      font: 400 1rem ${theme.font.family};
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: antialiased;

      &::before,
      &::after {
        box-sizing: inherit;
      }
    }

    html,
    body {
      height: 100%;
    }

    button {
      cursor: pointer;
      border: 0;
      background: transparent;
    }

    [disabled] {
      opacity: 0.7;
      cursor: not-allowed;
    }
  `}
`
