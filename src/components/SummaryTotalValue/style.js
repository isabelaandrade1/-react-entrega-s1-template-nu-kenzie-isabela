import styled from 'styled-components'

export const StyledUl = styled.ul`
  height: 46.875rem;
  padding-right: 0.3125rem;
  overflow-y: auto;
  margin-top: 1.5rem;

  ::-webkit-scrollbar {
    width: 0.625rem;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--color-grey-2);
  }
`
