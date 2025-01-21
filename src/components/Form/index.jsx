import { useState } from 'react'
import { PrimaryButton } from '../../styles/buttons'
import { StyledInput } from '../../styles/inputs'
import { StyledSelect } from '../../styles/selects'
import { StyledLabel, StyledParagraph } from '../../styles/typography'
import { StyledForm } from './styles'
import { v4 as uuidv4 } from 'uuid'

export const InsertCard = ({ setSummaryList }) => {
  const [text, setText] = useState('')
  const [money, setMoney] = useState('')
  const [typeValue, setTypeValue] = useState('')

  const addCardToList = () => {
    const newCard = { id: uuidv4(), text, money, typeValue }
    setSummaryList((summary) => [...summary, newCard])
  }

  const submit = (e) => {
    e.preventDefault()
    addCardToList()
    setText('')
    setMoney('')
    setTypeValue('')
  }

  return (
    <StyledForm onSubmit={submit}>
      <StyledLabel>Descrição</StyledLabel>
      <div>
        <StyledInput
          value={text}
          type='text'
          onChange={(e) => setText(e.target.value)}
          placeholder='Digite aqui sua descrição'
          required
        />
        <StyledParagraph>Ex: Compra de Roupas</StyledParagraph>
      </div>
      <div>
        <StyledLabel>Valor (R$)</StyledLabel>
        <StyledInput
          value={money}
          type='number'
          onChange={(e) => setMoney(e.target.value)}
          placeholder='1'
          required
        />
      </div>
      <div>
        <StyledLabel>Tipo de Valor</StyledLabel>
        <StyledSelect
          value={typeValue}
          onChange={(e) => setTypeValue(e.target.value)}
          required
        >
          <option hidden>Selecionar uma opção</option>
          <option value='Entrada'>Entrada</option>
          <option value='Despesa'>Despesa</option>
        </StyledSelect>
      </div>
      <PrimaryButton>Inserir valor</PrimaryButton>
    </StyledForm>
  )
}
