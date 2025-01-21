import styled from 'styled-components'

export const StyledSelect = styled.select`
  height: 3.125rem;
  width: 100%;
  padding-left: 1rem;
  font-family: var(--font-family-default);
  font-weight: var(--font-weight-5);
  font-size: var(--font-size-3);
  line-height: var(--line-height-4);
  color: var(--color-grey-3);
  background: var(--color-grey-0);
  border: 0.125rem solid var(--color-grey-0);
  border-radius: 0.5rem;

  @media screen and (max-width: 299px) {
    font-size: var(--font-size-4);
  }

  @media screen and (min-width: 1024px) {
    max-width: 21.875rem;
  }
`
