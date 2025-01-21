import styled from 'styled-components'

export const StyledResponsiveDivHeader = styled.div`
  margin: 0 auto;
  padding: 1rem;
  width: 100%;
  max-width: 64rem;
`

export const StyledResponsiveDivMain = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 1rem;
  width: 100%;
  max-width: 64rem;
  gap: 1.875rem;

  @media screen and (min-width: 1024px) {
    gap: 3.75rem;
  }

  > div:nth-child(1) {
    width: 100%;

    @media screen and (min-width: 1024px) {
      max-width: 22.1875rem;
    }
  }

  > div:nth-child(2) {
    width: 100%;

    @media screen and (min-width: 1024px) {
      max-width: 35rem;
    }
  }
`
