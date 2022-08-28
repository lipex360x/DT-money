import * as z from 'zod'

const searchFormSchema = z.object({
  query: z.string()
})

export default searchFormSchema
export type SearchFormInputs = z.infer<typeof searchFormSchema>
