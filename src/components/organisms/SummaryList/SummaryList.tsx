import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'

import { SummaryCard } from '@/components/molecules/SummaryCard'
import * as S from './styles'

export const SummaryList = () => {
  return (
    <S.Wrapper>
      <SummaryCard
        icon={<ArrowCircleUp size={32} color="#00b373" />}
        transaction="Entradas"
        value='R$ 17.400,00'
      />

      <SummaryCard
        icon={<ArrowCircleDown size={32} color="#f75a68" />}
        transaction="Saídas"
        value='R$ 17.400,00'
      />

      <SummaryCard
        variant='green'
        icon={<CurrencyDollar size={32} color="#fff" />}
        transaction="Entradas"
        value='R$ 17.400,00'
      />
    </S.Wrapper>
  )
}
