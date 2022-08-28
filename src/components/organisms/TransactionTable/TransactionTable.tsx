import { PriceHighLight } from '@/components/atoms/PriceHighLight'
import { useTransactionsContext } from '@/contexts/TransactionsContext'
import { dateFormatter } from '@/services/formatter.service'
import * as S from './styles'

export const TransactionTable = () => {
  const { transactions } = useTransactionsContext()

  return (
    <S.Wrapper>
      <tbody>
        {transactions.map(transaction => (
          <tr key={transaction.id}>
            <td width="40%">{transaction.description}</td>
            <td>
              <PriceHighLight
                variant={transaction.type}
                price={transaction.price}
              />
            </td>
            <td>{transaction.category}</td>
            <td>
              {dateFormatter.format(new Date(transaction.createdAt))}
            </td>
          </tr>
        ))}
      </tbody>
    </S.Wrapper>
  )
}
