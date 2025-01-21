import { StyledH2 } from '../../styles/typography'
import { StyledEmptyValueDiv } from './style'

export const EmptyList = () => {
  return (
    <StyledEmptyValueDiv>
      <StyledH2>Você ainda não possui nenhum lançamento</StyledH2>
    </StyledEmptyValueDiv>
  )
}
