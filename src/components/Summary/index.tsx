import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'
import { useSummary } from '../../hooks/useSummary'
import { PriceFormatter } from '../../utils/formatters'

import { SummaryCard, SummaryContainer } from './styles'

export function Summary() {
  const summary = useSummary()

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size="32" color="#00b37e" />
        </header>
        <span>{PriceFormatter.format(summary.income)}</span>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Saidas</span>
          <ArrowCircleDown size="32" color="#F75a68" />
        </header>
        <strong>{PriceFormatter.format(summary.outcome)}</strong>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size="32" color="#fff" />
        </header>
        <strong>{PriceFormatter.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
