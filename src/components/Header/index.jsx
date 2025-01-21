import { StyledResponsiveDivHeader } from '../../styles/grid'
import { StyledHeader } from './style'
import logo from '../../assets/Nu-Kenzie-logo.svg'

export const HeaderDefault = () => {
  return (
    <StyledHeader>
      <StyledResponsiveDivHeader>
        <figure>
          <img src={ logo } alt='Logo da Nu Kenzie' />
        </figure>
      </StyledResponsiveDivHeader>
    </StyledHeader>
  )
}
