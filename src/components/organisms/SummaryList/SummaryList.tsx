import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'

import { SummaryCard } from '@/components/molecules/SummaryCard'
import * as S from './styles'
import { useTransactionsContext } from '@/contexts/TransactionsContext'
import { priceFormatter } from '@/services/formatter.service'

export const SummaryList = () => {
  const { transactions } = useTransactionsContext()

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'income') {
      acc.income += transaction.price
      acc.total += transaction.price
    }

    if (transaction.type === 'outcome') {
      acc.outcome += transaction.price
      acc.total -= transaction.price
    }

    return acc
  },
    {
      income: 0,
      outcome: 0,
      total: 0
    }
  )

  return (
    <S.Wrapper>
      <SummaryCard
        variant='income'
        title="Entradas"
        icon={<ArrowCircleUp />}
        value={summary.income}
      />

      <SummaryCard
        variant='outcome'
        title="Saídas"
        icon={<ArrowCircleDown />}
        value={summary.outcome}
      />

      <SummaryCard
        variant='total'
        title="Total"
        icon={<CurrencyDollar />}
        value={summary.total}
      />
    </S.Wrapper>
  )
}
