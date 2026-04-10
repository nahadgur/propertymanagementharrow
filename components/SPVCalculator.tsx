'use client'

import { useState } from 'react'

function fmt(n: number): string {
  return new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 }).format(n)
}

function calcSPV(
  rentalIncome:     number,
  mortgageInterest: number,
  otherCosts:       number,
  incomeTaxRate:    number,
  portfolioValue:   number,
  mortgageBalance:  number,
  originalPurchase: number,
) {
  if (!rentalIncome || !mortgageInterest) return null

  // ── PERSONAL NAME ───────────────────────────────────────────────
  const personalTaxableProfit = Math.max(0, rentalIncome - otherCosts)
  const personalTax           = personalTaxableProfit * incomeTaxRate
  const personalTaxCredit     = mortgageInterest * 0.20
  const personalNetTax        = Math.max(0, personalTax - personalTaxCredit)

  // ── SPV LIMITED COMPANY ─────────────────────────────────────────
  // Inside company: mortgage interest fully deductible
  const corpTaxableProfit = Math.max(0, rentalIncome - mortgageInterest - otherCosts)
  // Corporation tax: 19% small profits / 25% main rate (using 25% for simplicity above £50k)
  const corpTaxRate       = corpTaxableProfit > 50000 ? 0.25 : 0.19
  const corpTax           = corpTaxableProfit * corpTaxRate

  const annualSaving = Math.max(0, personalNetTax - corpTax)

  // ── TRANSFER COSTS (simplified SDLT estimate) ───────────────────
  // SDLT on residential property in company: standard rates + 3% surcharge
  const sdltEstimate = (() => {
    if (portfolioValue <= 0) return 0
    // Simplified: 2% on £125k–£250k, 5% on £250k–£925k + 3% surcharge on all
    let sdlt = 0
    const p  = portfolioValue
    if (p > 1500000) sdlt += (p - 1500000) * 0.12
    if (p > 925000)  sdlt += (Math.min(p, 1500000) - 925000) * 0.10
    if (p > 250000)  sdlt += (Math.min(p, 925000) - 250000) * 0.05
    if (p > 125000)  sdlt += (Math.min(p, 250000) - 125000) * 0.02
    sdlt += p * 0.03 // 3% surcharge on full value
    return Math.round(sdlt)
  })()

  // CGT estimate on transfer: gain × 24% (higher rate residential)
  const estimatedGain = Math.max(0, portfolioValue - originalPurchase)
  const cgtEstimate   = Math.round(estimatedGain * 0.24)

  const totalTransferCost = sdltEstimate + cgtEstimate

  // ── BREAKEVEN ───────────────────────────────────────────────────
  const breakevenYears = annualSaving > 0 && totalTransferCost > 0
    ? Math.ceil(totalTransferCost / annualSaving)
    : 0

  return {
    personalNetTax,
    corpTax,
    annualSaving,
    corpTaxRate,
    sdltEstimate,
    cgtEstimate,
    totalTransferCost,
    breakevenYears,
    netEquity: portfolioValue - mortgageBalance,
  }
}

export default function SPVCalculator({ onOpenModal }: { onOpenModal: () => void }) {
  const [ri,   setRi]   = useState('')
  const [mi,   setMi]   = useState('')
  const [oc,   setOc]   = useState('')
  const [rate, setRate] = useState(0.40)
  const [pv,   setPv]   = useState('')
  const [mb,   setMb]   = useState('')
  const [op,   setOp]   = useState('')

  const results = calcSPV(
    parseFloat(ri)   || 0,
    parseFloat(mi)   || 0,
    parseFloat(oc)   || 0,
    rate,
    parseFloat(pv)   || 0,
    parseFloat(mb)   || 0,
    parseFloat(op)   || 0,
  )

  const GreenNum = ({ n, label }: { n: number; label: string }) => (
    <div className="text-center p-4 bg-white border border-[#e0e9e0]">
      <p className="font-display text-[24px] leading-none mb-1" style={{ color: 'var(--green)' }}>{fmt(n)}</p>
      <p className="font-sans text-[10px] text-text-faint uppercase tracking-wide">{label}</p>
    </div>
  )

  return (
    <div className="border border-[#e8e4de]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Inputs */}
        <div className="p-8 bg-white border-b lg:border-b-0 lg:border-r border-[#e8e4de]">
          <p className="eyebrow mb-6">Your portfolio</p>

          <div className="flex flex-col gap-4">
            {/* Income & costs */}
            <p className="font-sans text-[11px] uppercase tracking-widest text-text-faint font-semibold border-b border-[#f0eee8] pb-2">
              Annual income &amp; costs
            </p>

            {[
              { label: 'Annual gross rental income', val: ri, set: setRi, ph: '24000' },
              { label: 'Annual mortgage interest',   val: mi, set: setMi, ph: '12000' },
              { label: 'Other annual costs',         val: oc, set: setOc, ph: '3000'  },
            ].map(f => (
              <div key={f.label}>
                <label className="field-label">{f.label}</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 font-sans text-[14px] text-text-faint">&pound;</span>
                  <input type="number" value={f.val} onChange={e => f.set(e.target.value)}
                    placeholder={f.ph} className="field-input pl-8" />
                </div>
              </div>
            ))}

            {/* Tax rate */}
            <div>
              <label className="field-label">Your income tax rate</label>
              <select value={rate} onChange={e => setRate(parseFloat(e.target.value))} className="field-input">
                <option value={0.20}>20% — Basic rate</option>
                <option value={0.40}>40% — Higher rate</option>
                <option value={0.45}>45% — Additional rate</option>
              </select>
            </div>

            {/* Transfer cost inputs */}
            <p className="font-sans text-[11px] uppercase tracking-widest text-text-faint font-semibold border-b border-[#f0eee8] pb-2 mt-2">
              Transfer cost estimate (optional)
            </p>
            <p className="font-sans text-[11px] text-text-faint leading-relaxed -mt-2">
              For a breakeven calculation. Leave blank to skip.
            </p>

            {[
              { label: 'Current portfolio value',   val: pv, set: setPv, ph: '500000', note: 'Combined value of all properties' },
              { label: 'Outstanding mortgage balance', val: mb, set: setMb, ph: '325000', note: 'Total mortgage debt across portfolio' },
              { label: 'Original purchase price',    val: op, set: setOp, ph: '350000', note: 'Combined original costs (for CGT estimate)' },
            ].map(f => (
              <div key={f.label}>
                <label className="field-label">{f.label}</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 font-sans text-[14px] text-text-faint">&pound;</span>
                  <input type="number" value={f.val} onChange={e => f.set(e.target.value)}
                    placeholder={f.ph} className="field-input pl-8" />
                </div>
                <p className="font-sans text-[11px] text-text-faint mt-1">{f.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="p-8" style={{ background: 'var(--green-soft)' }}>
          {!results ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-16">
              <p className="font-display text-[20px] text-text mb-2">Enter your figures</p>
              <p className="font-sans text-[13px] text-text-muted">Results appear as you type.</p>
            </div>
          ) : (
            <div>
              <p className="eyebrow mb-6">Tax comparison</p>

              {/* Tax comparison */}
              <div className="grid grid-cols-2 gap-px bg-[#e0e9e0] mb-6">
                <div className="bg-white p-5 text-center">
                  <p className="font-sans text-[10px] text-text-faint uppercase tracking-wide mb-2">Personal name (annual tax)</p>
                  <p className="font-display text-[28px] text-text leading-none mb-1">{fmt(results.personalNetTax)}</p>
                  <p className="font-sans text-[11px] text-text-faint">After 20% S24 credit</p>
                </div>
                <div className="p-5 text-center" style={{ background: 'var(--green-light)' }}>
                  <p className="font-sans text-[10px] uppercase tracking-wide mb-2" style={{ color: 'var(--green-dark)' }}>SPV company (annual tax)</p>
                  <p className="font-display text-[28px] leading-none mb-1" style={{ color: 'var(--green-dark)' }}>{fmt(results.corpTax)}</p>
                  <p className="font-sans text-[11px]" style={{ color: 'var(--green)' }}>{Math.round(results.corpTaxRate * 100)}% corporation tax</p>
                </div>
              </div>

              {/* Annual saving */}
              <div className="p-6 bg-white border border-[#e0e9e0] mb-6">
                <p className="font-sans text-[12px] uppercase tracking-widest text-text-faint mb-2">Annual tax saving in SPV</p>
                <p className="font-display text-[44px] leading-none" style={{ color: results.annualSaving > 0 ? 'var(--green)' : '#c0392b' }}>
                  {fmt(results.annualSaving)}
                </p>
              </div>

              {/* Transfer costs (if provided) */}
              {results.totalTransferCost > 0 && (
                <>
                  <p className="eyebrow mb-4">Estimated transfer costs</p>
                  <div className="grid grid-cols-3 gap-px bg-[#e0e9e0] mb-4">
                    <GreenNum n={results.sdltEstimate}   label="SDLT estimate" />
                    <GreenNum n={results.cgtEstimate}    label="CGT estimate" />
                    <GreenNum n={results.totalTransferCost} label="Total cost" />
                  </div>

                  {results.breakevenYears > 0 && (
                    <div className="p-5 bg-white border border-[#e0e9e0] mb-6 text-center">
                      <p className="font-sans text-[12px] uppercase tracking-widest text-text-faint mb-2">Estimated breakeven</p>
                      <p className="font-display text-[40px] leading-none" style={{ color: 'var(--green)' }}>
                        {results.breakevenYears} {results.breakevenYears === 1 ? 'year' : 'years'}
                      </p>
                      <p className="font-sans text-[11px] text-text-faint mt-1">to recover transfer costs from annual tax saving</p>
                    </div>
                  )}
                </>
              )}

              {/* CTA */}
              <div className="border-t border-[#e0e9e0] pt-6">
                <p className="font-sans text-[12px] text-text-muted leading-relaxed mb-4">
                  These are simplified estimates. A specialist will model your exact position — including mortgage refinancing costs, legal fees, and your specific gain profile — before any recommendation is made.
                </p>
                <button onClick={onOpenModal} className="btn-primary w-full text-[13px] py-3">
                  Get a Full SPV Analysis — Free
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
