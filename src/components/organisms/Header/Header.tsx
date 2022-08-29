import { useState } from 'react'
import { Button } from '@/components/atoms/Button'
import { Logo } from '@/components/atoms/Logo'
import { Modal } from '@/components/molecules/Modal'
import { Container } from '@/components/bosons/Container'
import { TransactionForm } from '@/components/molecules/TransactionForm'
import { ToastContainer } from '@/components/atoms/ToastContainer'
import * as S from './styles'

export const Header = () => {
  const [modalState, setModalState] = useState(false)

  const handleModalState = () => {
    setModalState(!modalState)
  }

  return (
    <S.Wrapper>
      <Container>
        <S.Content>
          <Logo />
          <Button onClick={handleModalState}>Nova Transação</Button>
        </S.Content>
      </Container>

      <Modal
        isOpen={modalState}
        modalState={handleModalState}
        title='Nova Transação'
        content={<TransactionForm />}
      />

      <ToastContainer />
    </S.Wrapper>
  )
}
