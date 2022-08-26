import { Button } from '@/components/atoms/Button'
import { Logo } from '@/components/atoms/Logo'
import { Container } from '@/components/bosons/Container'

import * as S from './styles'

export const Header = () => {
  return (
    <S.Wrapper>
      <Container>
        <S.Content>
          <Logo />
          <Button>Nova Transação</Button>
        </S.Content>
      </Container>
    </S.Wrapper>
  )
}
