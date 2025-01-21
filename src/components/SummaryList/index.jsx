import { DeleteButton } from '../../styles/buttons'
import { StyledParagraph, StyledH3 } from '../../styles/typography'
import { StyledCardLi } from './style'

export const SalaryList = ({
  summaryId,
  descriptionValue,
  selectedValue,
  totalValue,
  removeCard,
}) => {
  return (
    <StyledCardLi borderColor={selectedValue}>
      <div>
        <StyledH3>{descriptionValue}</StyledH3>
        <StyledParagraph>{selectedValue}</StyledParagraph>
      </div>
      <div>
        <StyledParagraph>{totalValue}</StyledParagraph>
        <DeleteButton onClick={() => removeCard(summaryId)}>
          Excluir
        </DeleteButton>
      </div>
    </StyledCardLi>
  )
}
