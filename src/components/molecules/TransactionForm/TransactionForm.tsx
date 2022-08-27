import { Button } from '@/components/atoms/Button'
import { TextField } from '@/components/atoms/FormElements/TextField'
import * as S from './styles'

export const TransactionForm = () => {
  return (
    <S.Wrapper action=''>
      <TextField type="text" placeholder='Descrição' required />
      <TextField type="number" placeholder='Preço' required />
      <TextField type="text" placeholder='Categoria' required />
      <Button fullWidth>Cadastrar</Button>
    </S.Wrapper>
  )
}
