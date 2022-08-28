import { priceFormatter } from '@/services/formatter.service'
import * as S from './styles'

export type PriceHighLightProps = {
  variant: 'income' | 'outcome'
  price: number
}


export const PriceHighLight = ({ variant, price }: PriceHighLightProps) => (
  <S.Wrapper variant={variant}>
    {variant === 'outcome' && '- '}
    {priceFormatter.format(price)}
  </S.Wrapper>
)
