'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Results {
  annualTaxOld:    number
  annualTaxNew:    number
  section24Cost:   number
  fiveYearCost:    number
  tenYearCost:     number
  monthlyExtra:    number
  effectiveRate:   number
  taxRateLabel:    string
}

function fmt(n: number): string {
  return new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 }).format(n)
}

function calculate(
  rentalIncome: number,
  mortgageInterest: number,
  otherCosts: number,
  taxRate: number,
): Results | null {
  if (!rentalIncome || !mortgageInterest) return null

  // Old rules — mortgage interest fully deductible
  const oldProfit    = Math.max(0, rentalIncome - mortgageInterest - otherCosts)
  const annualTaxOld = oldProfit * taxRate

  // Current rules — Section 24
  const newProfit    = Math.max(0, rentalIncome - otherCosts)
  const taxOnProfit  = newProfit * taxRate
  const taxCredit    = mortgageInterest * 0.20
  const annualTaxNew = Math.max(0, taxOnProfit - taxCredit)

  const section24Cost = Math.max(0, annualTaxNew - annualTaxOld)

  const taxRateLabels: Record<number, string> = {
    0.20: '20% (Basic rate)',
    0.40: '40% (Higher rate)',
    0.45: '45% (Additional rate)',
  }

  return {
    annualTaxOld,
    annualTaxNew,
    section24Cost,
    fiveYearCost:  section24Cost * 5,
    tenYearCost:   section24Cost * 10,
    monthlyExtra:  section24Cost / 12,
    effectiveRate: rentalIncome > 0 ? (section24Cost / rentalIncome) * 100 : 0,
    taxRateLabel:  taxRateLabels[taxRate] ?? '',
  }
}

export default function Section24Calculator({ onOpenModal }: { onOpenModal: () => void }) {
  const [rentalIncome,     setRentalIncome]     = useState('')
  const [mortgageInterest, setMortgageInterest] = useState('')
  const [otherCosts,       setOtherCosts]       = useState('')
  const [taxRate,          setTaxRate]           = useState(0.40)

  const ri   = parseFloat(rentalIncome)     || 0
  const mi   = parseFloat(mortgageInterest) || 0
  const oc   = parseFloat(otherCosts)       || 0
  const results = calculate(ri, mi, oc, taxRate)

  const pctWidth = (n: number, max: number) =>
    `${Math.min(100, Math.round((n / max) * 100))}%`

  const maxTax = results ? Math.max(results.annualTaxOld, results.annualTaxNew, 1) : 1

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-[#e8e4de]">
      {/* Inputs */}
      <div className="p-8 bg-white border-b lg:border-b-0 lg:border-r border-[#e8e4de]">
        <p className="eyebrow mb-6">Enter your figures</p>

        <div className="flex flex-col gap-5">
          {/* Rental income */}
          <div>
            <label className="field-label">Annual gross rental income</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-sans text-[15px] text-text-faint">&pound;</span>
              <input
                type="number"
                value={rentalIncome}
                onChange={e => setRentalIncome(e.target.value)}
                placeholder="e.g. 24000"
                className="field-input pl-8"
              />
            </div>
            <p className="font-sans text-[11px] text-text-faint mt-1">Total rent received before deductions</p>
          </div>

          {/* Mortgage interest */}
          <div>
            <label className="field-label">Annual mortgage interest</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-sans text-[15px] text-text-faint">&pound;</span>
              <input
                type="number"
                value={mortgageInterest}
                onChange={e => setMortgageInterest(e.target.value)}
                placeholder="e.g. 12000"
                className="field-input pl-8"
              />
            </div>
            <p className="font-sans text-[11px] text-text-faint mt-1">Interest portion only — not capital repayments</p>
          </div>

          {/* Other costs */}
          <div>
            <label className="field-label">Other annual allowable costs (optional)</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-sans text-[15px] text-text-faint">&pound;</span>
              <input
                type="number"
                value={otherCosts}
                onChange={e => setOtherCosts(e.target.value)}
                placeholder="e.g. 3000"
                className="field-input pl-8"
              />
            </div>
            <p className="font-sans text-[11px] text-text-faint mt-1">Agent fees, repairs, insurance, etc.</p>
          </div>

          {/* Tax rate */}
          <div>
            <label className="field-label">Your income tax rate on rental income</label>
            <div className="flex flex-col gap-2 mt-1">
              {[
                { rate: 0.20, label: '20% — Basic rate taxpayer' },
                { rate: 0.40, label: '40% — Higher rate taxpayer' },
                { rate: 0.45, label: '45% — Additional rate taxpayer' },
              ].map(opt => (
                <label key={opt.rate}
                  className="flex items-center gap-3 cursor-pointer p-3 border transition-colors"
                  style={{
                    borderColor: taxRate === opt.rate ? 'var(--green)' : '#e8e4de',
                    background:  taxRate === opt.rate ? 'var(--green-soft)' : 'transparent',
                  }}>
                  <input
                    type="radio"
                    name="taxRate"
                    checked={taxRate === opt.rate}
                    onChange={() => setTaxRate(opt.rate)}
                    className="accent-[#277649]"
                  />
                  <span className="font-sans text-[13px] text-text">{opt.label}</span>
                </label>
              ))}
            </div>
            <p className="font-sans text-[11px] text-text-faint mt-2">
              If your total income (including rent) falls partly in basic and partly in higher rate, choose higher rate for a conservative estimate.
            </p>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="p-8" style={{ background: 'var(--green-soft)' }}>
        {!results ? (
          <div className="flex flex-col items-center justify-center h-full text-center py-12">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
              style={{ background: 'var(--green-light)' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="#277649" strokeWidth="1.5" strokeLinecap="round">
                <path d="M9 7H6a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-3"/>
                <path d="M9 15h3l8.5-8.5a1.5 1.5 0 00-3-3L9 12v3"/>
              </svg>
            </div>
            <p className="font-display text-[20px] text-text mb-2">Enter your figures</p>
            <p className="font-sans text-[13px] text-text-muted">
              Your results will appear here as you type.
            </p>
          </div>
        ) : (
          <div>
            <p className="eyebrow mb-6">Your results</p>

            {/* Main result */}
            <div className="mb-8 p-6 bg-white border border-[#e0e9e0]">
              <p className="font-sans text-[12px] uppercase tracking-widest text-text-faint mb-2">
                Annual Section 24 additional tax
              </p>
              <p className="font-display text-[48px] leading-none mb-1"
                style={{ color: results.section24Cost > 0 ? '#c0392b' : 'var(--green)' }}>
                {fmt(results.section24Cost)}
              </p>
              <p className="font-sans text-[13px] text-text-muted">
                {results.section24Cost > 0
                  ? `Extra tax paid each year due to Section 24 as a ${results.taxRateLabel.split(' ')[0]} taxpayer`
                  : 'Section 24 does not create additional tax in this scenario'}
              </p>
            </div>

            {/* Bar comparison */}
            <div className="mb-6 flex flex-col gap-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-sans text-[11px] text-text-faint uppercase tracking-wide">Tax before Section 24</span>
                  <span className="font-sans text-[13px] font-semibold text-text">{fmt(results.annualTaxOld)}</span>
                </div>
                <div className="h-3 bg-[#e0e9e0] rounded-full overflow-hidden">
                  <div className="h-full rounded-full transition-all duration-500"
                    style={{ width: pctWidth(results.annualTaxOld, maxTax), background: 'var(--green)' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-sans text-[11px] text-text-faint uppercase tracking-wide">Tax under current rules</span>
                  <span className="font-sans text-[13px] font-semibold text-text">{fmt(results.annualTaxNew)}</span>
                </div>
                <div className="h-3 bg-[#e0e9e0] rounded-full overflow-hidden">
                  <div className="h-full rounded-full transition-all duration-500"
                    style={{ width: pctWidth(results.annualTaxNew, maxTax), background: results.section24Cost > 0 ? '#c0392b' : 'var(--green)' }} />
                </div>
              </div>
            </div>

            {/* Breakdown stats */}
            {results.section24Cost > 0 && (
              <div className="grid grid-cols-3 gap-px bg-[#e0e9e0] mb-6">
                {[
                  { label: 'Per month',  value: fmt(results.monthlyExtra) },
                  { label: '5 years',   value: fmt(results.fiveYearCost) },
                  { label: '10 years',  value: fmt(results.tenYearCost) },
                ].map(s => (
                  <div key={s.label} className="bg-white p-4 text-center">
                    <p className="font-display text-[20px] text-text leading-none mb-1">{s.value}</p>
                    <p className="font-sans text-[10px] text-text-faint uppercase tracking-wide">{s.label}</p>
                  </div>
                ))}
              </div>
            )}

            {/* CTA */}
            <div className="border-t border-[#e0e9e0] pt-6">
              <p className="font-sans text-[13px] text-text-muted leading-relaxed mb-4">
                {results.section24Cost > 0
                  ? 'There are legal strategies that can reduce or eliminate this cost. A specialist will model the right approach for your portfolio.'
                  : 'Even if Section 24 does not apply to you now, your position can change as your portfolio grows or your income changes.'}
              </p>
              <button onClick={onOpenModal} className="btn-primary w-full text-[13px] py-3">
                Find a Specialist — Free
              </button>
              <p className="font-sans text-[11px] text-text-faint text-center mt-3">
                These are estimates for illustrative purposes only. Always seek advice from a qualified tax specialist for your specific situation.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
