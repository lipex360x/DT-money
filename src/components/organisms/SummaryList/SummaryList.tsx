import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'

import { SummaryCard } from '@/components/molecules/SummaryCard'
import * as S from './styles'
import { useSummary } from '@/components/hooks/useSummary'

export const SummaryList = () => {
  const summary = useSummary()

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
