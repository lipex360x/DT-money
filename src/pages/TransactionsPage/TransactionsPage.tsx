import { useEffect } from 'react'
import { Container } from '@/components/bosons/Container'
import { SearchForm } from '@/components/organisms/SearchForm'
import { TransactionTable } from '@/components/organisms/TransactionTable'
import { SummaryList } from '@/components/organisms/SummaryList'
import { useTransactionsContext } from '@/contexts/TransactionsContext'

export const TransactionsPage = () => {

  const { fetchTransactions } = useTransactionsContext()

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <Container>
      <SummaryList />
      <SearchForm />
      <TransactionTable />
    </Container>
  )
}
