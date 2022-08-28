import * as z from 'zod'

const transactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome'])
})

export default transactionFormSchema
export type TransactionFormInputs = z.infer<typeof transactionFormSchema>
