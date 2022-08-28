import { ArrowCircleUp, ArrowCircleDown } from 'phosphor-react'
import { Button } from '@/components/atoms/Button'
import { TextField } from '@/components/atoms/FormElements/TextField'
import * as S from './styles'

export const TransactionForm = () => {
  return (
    <S.Wrapper action=''>
      <TextField type="text" placeholder='Descrição' required />
      <TextField type="number" placeholder='Preço' required />
      <TextField type="text" placeholder='Categoria' required />
      <S.TransactionType>
        <S.TransactionTypeButton value='income' variant='income'>
          <ArrowCircleUp size={24} />
          <span>Entrada</span>
        </S.TransactionTypeButton>

        <S.TransactionTypeButton value='outcome' variant='outcome'>
          <ArrowCircleDown size={24} />
          <span>Saída</span>
        </S.TransactionTypeButton>
      </S.TransactionType>

      <Button fullWidth size='large'>Cadastrar</Button>
    </S.Wrapper>
  )
}
