import * as Dialog from '@radix-ui/react-dialog';
import { ReactNode, useEffect, useState } from 'react';
import { X } from 'phosphor-react'
import * as S from './styles'

type ModalProps = {
  content: ReactNode
  isOpen: boolean
  modalState: () => void
  title: string
}

export const Modal = ({ isOpen = false, modalState, title, content }: ModalProps) => {
  const [open, setOpen] = useState(isOpen)

  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen])

  return (
    <Dialog.Root open={open}>
      <Dialog.Portal>
        <S.Overlay />

        <S.Content>
          <S.ModalHeader>
            <Dialog.Title>{title}</Dialog.Title>
            <S.CloseButton onClick={modalState}><X size={24} /></S.CloseButton>
          </S.ModalHeader>
          {content}
        </S.Content>

      </Dialog.Portal>
    </Dialog.Root>
  )
}
