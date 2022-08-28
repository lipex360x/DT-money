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
        icon={<ArrowCircleUp size={32} color="#00b373" />}
        transaction="Entradas"
        value={priceFormatter.format(summary.income)}
      />

      <SummaryCard
        icon={<ArrowCircleDown size={32} color="#f75a68" />}
        transaction="Saídas"
        value={priceFormatter.format(summary.outcome)}
      />

      <SummaryCard
        variant='green'
        icon={<CurrencyDollar size={32} color="#fff" />}
        transaction="Total"
        value={priceFormatter.format(summary.total)}
      />
    </S.Wrapper>
  )
}
