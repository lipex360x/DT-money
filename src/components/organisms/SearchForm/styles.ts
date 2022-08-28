import styled, { css } from 'styled-components'

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    gap: 1rem;
    margin-top: 4rem;

    input {
      flex: 1;
      border-radius: 6px;
      border: 0;
      background: ${theme.color['gray-900']};
      padding: 1rem;
      color: ${theme.color['gray-300']};

      &::placeholder{
        color: ${theme.color['gray-500']}
      }
    }
  `}
`
