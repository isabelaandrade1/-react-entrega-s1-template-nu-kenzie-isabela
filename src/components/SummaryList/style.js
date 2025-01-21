import styled from 'styled-components'

export const StyledCardLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  align-items: flex-start;
  height: 9.375rem;
  width: 100%;
  margin-top: 1rem;
  padding: 0.625rem 1rem;
  background: var(--color-grey-0);
  border-radius: 0.25rem;
  gap: 1.25rem;

  ${({ borderColor }) => {
    return borderColor === 'Entrada'
      ? 'border-left: 0.25rem solid #03B898;'
      : 'border-left: 0.25rem solid #E9ECEF;'
  }}

  div > p {
    color: var(--color-grey-3);
  }

  > div:first-child {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    height: 100%;
    gap: 0.3125rem;
  }

  > div:last-child {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    align-items: flex-start;
    height: 100%;
    gap: 0.625rem;
  }

  @media screen and (min-width: 426px) {
    flex-direction: row;
    height: 5.625rem;
    gap: 1.875rem;

    > div:last-child {
      align-items: flex-end;
      gap: 0.3125rem;
    }
  }
`
