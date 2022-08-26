import { Container } from '@/components/bosons/Container'
import { TransactionTable } from '@/components/molecules/TransactionTable'
import { SummaryList } from '@/components/organisms/SummaryList'
import * as S from './styles'

export const TransactionsPage = () => {
  return (
    <S.Wrapper>
      <Container>
        <SummaryList />
        <TransactionTable />
      </Container>
    </S.Wrapper>
  )
}
