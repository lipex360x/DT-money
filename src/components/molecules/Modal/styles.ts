import styled, { css } from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'


export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const ModalHeader = styled.header`
  ${({ theme }) => css`
    color: ${theme.color['gray-100']};
    margin-bottom: 2rem;
  `}
`

export const CloseButton = styled(Dialog.Close)`
  ${({ theme }) => css`
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    line-height: 0;
    color: ${theme.color['gray-500']};
  `}
`

export const Content = styled(Dialog.Content)`
  ${({ theme }) => css`
    min-width: 32rem;
    border-radius: ${theme.border.radius.hard};
    padding: 2.5rem 3rem;
    background: ${theme.color['gray-800']};
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
  `}
`
