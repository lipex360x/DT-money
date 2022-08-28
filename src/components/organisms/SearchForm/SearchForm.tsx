import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { MagnifyingGlass } from 'phosphor-react'
import { Button } from '@/components/atoms/Button'
import * as S from './styles'
import { TextField } from '@/components/atoms/FormElements/TextField'
import searchFormSchema, { SearchFormInputs } from './searchForm.schema'
import { useTransactionsContext } from '@/contexts/TransactionsContext'


export const SearchForm = () => {
  const { fetchTransactions } = useTransactionsContext()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  })

  const handleSearchTransactions = async (data: SearchFormInputs) => {
    await fetchTransactions(data.query)
  }

  return (
    <S.Form onSubmit={handleSubmit(handleSearchTransactions)}>
      <TextField
        placeholder='Busque uma transação'
        {...register('query')}
      />

      <Button disabled={isSubmitting}
        minimal
        icon={<MagnifyingGlass size={20} />}
        type='submit'
      />
    </S.Form>
  )
}
