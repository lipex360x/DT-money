import { api } from '@/components/api/client'
import { TransactionDto } from '@/Dtos/transactions'
import { produce } from 'immer'
import create from 'zustand'

type TransactionProps = Omit<TransactionDto, 'id' | 'createdAt'>

type ContextProps = {
  transactions: TransactionDto[]
  createTransaction: (data: TransactionProps) => Promise<void>
  fetchTransactions: (query?: string) => Promise<void>
}

export const useTransactionsContext = create<ContextProps>((set) => {
  return {
    transactions: [],

    createTransaction: async (data: TransactionProps) => {
      const { description, price, category, type } = data

      const response = await api.post<TransactionDto>('transactions', {
        description,
        price,
        category,
        type,
        createdAt: new Date().toISOString()
      })

      console.log(response)

      set((state) => produce(state, (draft) => {
        draft.transactions.push(response.data)
      }))
    },

    fetchTransactions: async (query?: string) => {
      const response = await api.get<TransactionDto[]>('transactions', {
        params: {
          q: query,
          _sort: 'createdAt',
          _order: 'desc'
        }
      })

      set(() => ({
        transactions: response.data
      }))

      // set((state) => setTransactions(state, response.data))
    }
  }
})
