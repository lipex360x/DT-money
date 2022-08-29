import styled, { css } from 'styled-components'

export const Table = styled.table`
  ${({ theme }) => css`
    margin: 1rem 0;
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
