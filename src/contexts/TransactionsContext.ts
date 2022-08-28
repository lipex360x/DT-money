import { api } from '@/components/api/client'
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
      const response = await api.get<TransactionDto[]>('transactions', {
        params: { q: query }
      })

      set((state) =>
        produce(state, (draft) => {
          draft.transactions = response.data
        })
      )
    }
  }
})
