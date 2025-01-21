import { StyledH3 } from '../../styles/typography'
import { SalaryList } from '../SummaryList'
import { EmptyList } from '../SummaryListEmpty'
import { StyledUl } from './style'

export const SumaryArea = ({ summaryList, setSummaryList }) => {
  const removeCard = (id) => {
    if (confirm('Você realmente deseja excluir?'))
      setSummaryList((summaryList) =>
        summaryList.filter((summary) => summary.id !== id)
      )
  }

  return (
    <>
      <StyledH3>Resumo financeiro</StyledH3>
      {summaryList.length == 0 ? (
        <EmptyList />
      ) : (
        <StyledUl>
          {summaryList.map(({ id, text, money, typeValue }) => (
            <SalaryList
              key={id}
              descriptionValue={text}
              totalValue={Number(money).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
              selectedValue={typeValue}
              summaryId={id}
              removeCard={removeCard}
            />
          ))}
        </StyledUl>
      )}
    </>
  )
}
