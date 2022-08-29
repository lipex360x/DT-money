import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowCircleUp, ArrowCircleDown } from 'phosphor-react'
import { Button } from '@/components/atoms/Button'
import { TextField } from '@/components/atoms/FormElements/TextField'
import transactionFormSchema, { TransactionFormInputs } from './TransactionForm.schema'
import { useTransactionsContext } from '@/contexts/TransactionsContext'
import toastService from '@/services/toast.service';
import * as S from './styles'

export const TransactionForm = () => {
  const { createTransaction } = useTransactionsContext()

  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset
  } = useForm<TransactionFormInputs>({
    resolver: zodResolver(transactionFormSchema),
    defaultValues: {
      type: 'income'
    }
  })

  const handleCreateTransaction = async (data: TransactionFormInputs) => {
    await createTransaction(data)
    reset()
    toastService.success('Registro inserido com sucesso')

  }

  return (
    <S.Form onSubmit={handleSubmit(handleCreateTransaction)}>
      <TextField
        type="text"
        placeholder='Descrição'
        {...register('description')}
        required
      />

      <TextField
        type="number"
        placeholder='Preço'
        {...register('price', { valueAsNumber: true })}
        required
      />

      <TextField
        type="text"
        placeholder='Categoria'
        {...register('category')}
        required
      />

      <Controller
        control={control}
        name="type"
        render={({ field }) => {
          return (
            <S.TransactionType onValueChange={field.onChange} value={field.value}
            >
              <S.TransactionTypeButton value='income' variant='income'>
                <ArrowCircleUp />
                <span>Entrada</span>
              </S.TransactionTypeButton>

              <S.TransactionTypeButton value='outcome' variant='outcome'>
                <ArrowCircleDown />
                <span>Saída</span>
              </S.TransactionTypeButton>
            </S.TransactionType>
          )
        }}
      />

      <Button
        fullWidth size='large'
        type="submit"
        disabled={isSubmitting}
      >Cadastrar</Button>

    </S.Form>
  )
}
