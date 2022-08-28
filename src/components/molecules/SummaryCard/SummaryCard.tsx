import { priceFormatter } from '@/services/formatter.service'
import * as S from './styles'

export type SummaryCardProps = {
  variant: 'income' | 'outcome' | 'total'
  title: string
  icon: JSX.Element
  value: number
}

export const SummaryCard = ({ variant, icon, title, value }: SummaryCardProps) => (
  <S.Wrapper variant={variant}>
    <S.Header>
      <span>{title}</span>
      {icon}
    </S.Header>

    <S.Price>
      {variant === 'outcome' && '- '}
      {priceFormatter.format(value)}
    </S.Price>
  </S.Wrapper>
)

