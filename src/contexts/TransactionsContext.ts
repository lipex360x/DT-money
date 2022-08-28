import { TransactionDto } from '@/Dtos/transactions'
import { produce } from 'immer'
import create from 'zustand'

type ContextProps = {
  transactions: TransactionDto[]
  fetchTransactions: (query?: string) => Promise<void>
}


export const useTransactionsContext = create<ContextProps>((set) => {
  return {
    transactions: [],

    fetchTransactions: async (query?: string) => {
      const url = new URL('http://localhost:3333/transactions')

      if (query) url.searchParams.append('q', query)

      const response = await fetch(url)
      const data: TransactionDto[] = await response.json()

      set((state) =>
        produce(state, (draft) => {
          draft.transactions = data
        })
      )
    }
  }
})
