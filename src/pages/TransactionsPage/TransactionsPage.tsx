import { useEffect } from 'react'
import { Container } from '@/components/bosons/Container'
import { SearchForm } from '@/components/organisms/SearchForm'
import { TransactionTable } from '@/components/organisms/TransactionTable'
import { SummaryList } from '@/components/organisms/SummaryList'
import { useTransactionsContext } from '@/contexts/TransactionsContext'

export const TransactionsPage = () => {

  const { setTransactions } = useTransactionsContext()

  const loadTransactions = async () => {
    const response = await fetch('http://localhost:3333/transactions')
    const data = await response.json()
    setTransactions(data)
  }
  useEffect(() => {
    loadTransactions()
  }, [])

  return (
    <Container>
      <SummaryList />
      <SearchForm />
      <TransactionTable />
    </Container>
  )
}
