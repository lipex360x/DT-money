import * as S from './styles'

export const TransactionTable = () => {
  return (
    <S.Wrapper>
      <tbody>
        <tr>
          <td width="40%">Desenvolvimento de Site</td>
          <td><S.PriceHighLight variant='income'>R$ 12.000,00</S.PriceHighLight></td>
          <td>Venda</td>
          <td>13/04/2022</td>
        </tr>
        <tr>
          <td width="40%">Hamburguer</td>
          <td><S.PriceHighLight variant='outcome'>-R$ 59,00</S.PriceHighLight></td>
          <td>Alimentação</td>
          <td>13/04/2022</td>
        </tr>
      </tbody>
    </S.Wrapper>
  )
}
