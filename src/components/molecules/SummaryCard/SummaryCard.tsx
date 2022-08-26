import * as S from './styles'

export type SummaryCardProps = {
  variant?: 'gray' | 'green'
  transaction: string
  icon: JSX.Element
  value: string
}

export const SummaryCard = ({ variant = 'gray', icon, transaction, value }: SummaryCardProps) => {
  return (
    <S.Wrapper variant={variant}>
      <header>
        <span>{transaction}</span>
        {icon}
      </header>

      <strong>{value}</strong>
    </S.Wrapper>
  )
}
