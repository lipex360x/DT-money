import { Container } from '@/components/bosons/Container'
import { SummaryList } from '@/components/organisms/SummaryList'
import * as S from './styles'

export const TransactionsPage = () => {
  return (
    <S.Wrapper>
      <Container>
        <SummaryList />
      </Container>
    </S.Wrapper>
  )
}
