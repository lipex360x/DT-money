import { MagnifyingGlass } from 'phosphor-react'
import { Button } from '@/components/atoms/Button'
import * as S from './styles'

export const SearchForm = () => {
  return (
    <S.Wrapper>
      <input type="text" name="" placeholder='Busque uma transação' />
      <Button
        minimal
        icon={<MagnifyingGlass size={20} />}
        type='submit'
      >
        Buscar
      </Button>
    </S.Wrapper>
  )
}
