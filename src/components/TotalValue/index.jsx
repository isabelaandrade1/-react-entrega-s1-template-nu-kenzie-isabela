import { StyledParagraph, StyledH3 } from '../../styles/typography'
import { StyledTotalValueDiv } from './style'

export const TotalValue = ({ summaryList }) => {
  const totalMoney = summaryList.reduce((accValue, summary) => {
    return summary.typeValue === 'Entrada'
      ? accValue + Number(summary.money)
      : accValue - Number(summary.money)
  }, 0)

  const formattedTotalMoney = totalMoney.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <StyledTotalValueDiv>
      <div>
        <StyledH3>Valor Total</StyledH3>
        <StyledParagraph>O valor se refere ao saldo</StyledParagraph>
      </div>
      <StyledH3>{formattedTotalMoney}</StyledH3>
    </StyledTotalValueDiv>
  )
}
