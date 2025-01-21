import { useState } from 'react'
import { InsertCard } from './components/Form'
import { HeaderDefault } from './components/Header'
import { SumaryArea } from './components/SummaryTotalValue'
import { TotalValue } from './components/TotalValue'
import { GlobalStyles } from './styles/globalStyles'
import { StyledResponsiveDivMain } from './styles/grid'
import { ResetCss } from './styles/reset'

function App() {
  const [summary, setSummaryList] = useState([])

  return (
    <>
      <ResetCss />
      <GlobalStyles />

      <HeaderDefault />
      <main>
        <StyledResponsiveDivMain>
          <div>
            <InsertCard setSummaryList={setSummaryList} />
            <TotalValue summaryList={summary} />
          </div>
          <div>
            <SumaryArea summaryList={summary} setSummaryList={setSummaryList} />
          </div>
        </StyledResponsiveDivMain>
      </main>
    </>
  )
}

export default App
