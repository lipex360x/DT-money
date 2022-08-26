import { Container } from '@/components/bosons/Container'
import { SearchForm } from '@/components/organisms/SearchForm'
import { TransactionTable } from '@/components/molecules/TransactionTable'
import { SummaryList } from '@/components/organisms/SummaryList'
import * as S from './styles'

export const TransactionsPage = () => {
  return (
    <S.Wrapper>
      <Container>
        <SummaryList />
        <SearchForm />
        <TransactionTable />
      </Container>
    </S.Wrapper>
  )
}
