import { TransactionDto } from '@/Dtos/transactions'
import * as S from './styles'

type TransactionTableProps = {
  transactions: TransactionDto[]
}

export const TransactionTable = ({ transactions }: TransactionTableProps) => {

  console.log(transactions)

  return (
    <S.Wrapper>
      <tbody>
        {transactions.map(transaction => (
          <tr key={transaction.id}>
            <td width="40%">{transaction.description}</td>
            <td>< S.PriceHighLight variant={transaction.type}>{transaction.price}</S.PriceHighLight></td>
            <td>{transaction.category}</td>
            <td>{transaction.createdAt}</td>
          </tr>
        ))}
      </tbody>
    </S.Wrapper>
  )
}
