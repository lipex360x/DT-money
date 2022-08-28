import { Container } from '@/components/bosons/Container'
import { SearchForm } from '@/components/organisms/SearchForm'
import { TransactionTable } from '@/components/organisms/TransactionTable'
import { SummaryList } from '@/components/organisms/SummaryList'
import * as S from './styles'
import { useEffect, useState } from 'react'
import { TransactionDto } from '@/Dtos/transactions'


export const TransactionsPage = () => {

  const [transactions, setTransactions] = useState<TransactionDto[]>([])

  const loadTransactions = async () => {
    const response = await fetch('http://localhost:3333/transactions')
    const data = await response.json()
    setTransactions(data)
  }
  useEffect(() => {
    loadTransactions()
  }, [])

  return (
    <S.Wrapper>
      <Container>
        <SummaryList />
        <SearchForm />
        <TransactionTable transactions={transactions} />
      </Container>
    </S.Wrapper>
  )
}
