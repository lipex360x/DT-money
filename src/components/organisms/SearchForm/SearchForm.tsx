import { MagnifyingGlass } from 'phosphor-react'
import { Button } from '@/components/atoms/Button'
import * as S from './styles'
import { TextField } from '@/components/atoms/FormElements/TextField'

export const SearchForm = () => {
  return (
    <S.Wrapper>
      <TextField placeholder='Busque uma transação' />
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
