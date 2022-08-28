import { TransactionDto } from '@/Dtos/transactions'
import { produce } from 'immer'
import create from 'zustand'

type ContextProps = {
  transactions: TransactionDto[]
  setTransactions: (transactions: TransactionDto[]) => void
}

export const useTransactions = create<ContextProps>((set) => {
  return {
    transactions: [],

    setTransactions: (transactions) => set((state) =>
      produce(state, (draft) => {
        draft.transactions = transactions
      })
    )
  }
})
