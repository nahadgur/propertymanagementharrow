'use client'

import { useState } from 'react'

function fmt(n: number) {
  return new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 }).format(n)
}

function calcCGT(
  purchasePrice:  number,
  salePrice:      number,
  sellingCosts:   number,
  yearsOwned:     number,
  yearsAsHome:    number,
  wasMainHome:    boolean,
  incomeInYear:   number,
) {
  if (!purchasePrice || !salePrice || salePrice <= purchasePrice) return null

  const AEA = 3000 // 2024/25 Annual Exempt Amount

  // Gross gain
  const grossGain = salePrice - purchasePrice - sellingCosts

  // PRR calculation
  let prrRelief = 0
  if (wasMainHome && yearsOwned > 0 && yearsAsHome > 0) {
    // PRR covers period of occupation + final 9 months (0.75 years)
    const prrPeriod = Math.min(yearsOwned, yearsAsHome + 0.75)
    const prrFraction = prrPeriod / yearsOwned
    prrRelief = grossGain * prrFraction
  }

  const gainAfterPRR = Math.max(0, grossGain - prrRelief)

  // Lettings relief (up to £40,000 where PRR also applies)
  const lettingsRelief = wasMainHome && prrRelief > 0
    ? Math.min(40000, prrRelief, gainAfterPRR)
    : 0

  const gainAfterReliefs = Math.max(0, gainAfterPRR - lettingsRelief)

  // AEA
  const taxableGain = Math.max(0, gainAfterReliefs - AEA)

  // Tax rates: basic rate band remaining
  const BASIC_RATE_THRESHOLD = 50270
  const remainingBasicBand = Math.max(0, BASIC_RATE_THRESHOLD - incomeInYear)

  let cgtAtBasic = 0
  let cgtAtHigher = 0

  if (taxableGain > 0) {
    if (taxableGain <= remainingBasicBand) {
      cgtAtBasic = taxableGain * 0.18
    } else {
      cgtAtBasic  = remainingBasicBand * 0.18
      cgtAtHigher = (taxableGain - remainingBasicBand) * 0.24
    }
  }

  const totalCGT = cgtAtBasic + cgtAtHigher
  const netProceeds = salePrice - sellingCosts - totalCGT

  return {
    grossGain,
    prrRelief,
    lettingsRelief,
    gainAfterReliefs,
    aea: Math.min(AEA, gainAfterReliefs),
    taxableGain,
    cgtAtBasic,
    cgtAtHigher,
    totalCGT,
    netProceeds,
    effectiveRate: grossGain > 0 ? (totalCGT / grossGain) * 100 : 0,
  }
}

export default function CGTCalculator({ onOpenModal }: { onOpenModal: () => void }) {
  const [purchasePrice, setPurchasePrice] = useState('')
  const [salePrice,     setSalePrice]     = useState('')
  const [sellingCosts,  setSellingCosts]  = useState('')
  const [yearsOwned,    setYearsOwned]    = useState('')
  const [wasMainHome,   setWasMainHome]   = useState(false)
  const [yearsAsHome,   setYearsAsHome]   = useState('')
  const [otherIncome,   setOtherIncome]   = useState('')

  const results = calcCGT(
    parseFloat(purchasePrice) || 0,
    parseFloat(salePrice)     || 0,
    parseFloat(sellingCosts)  || 0,
    parseFloat(yearsOwned)    || 0,
    parseFloat(yearsAsHome)   || 0,
    wasMainHome,
    parseFloat(otherIncome)   || 0,
  )

  const Row = ({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) => (
    <div className={`flex justify-between py-2.5 border-b border-[#f0eee8] ${highlight ? 'font-semibold' : ''}`}>
      <span className="font-sans text-[13px] text-text-muted">{label}</span>
      <span className={`font-sans text-[13px] ${highlight ? 'text-text' : 'text-text-muted'}`}>{value}</span>
    </div>
  )

  return (
    <div className="border border-[#e8e4de]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Inputs */}
        <div className="p-8 bg-white border-b lg:border-b-0 lg:border-r border-[#e8e4de]">
          <p className="eyebrow mb-6">Property details</p>
          <div className="flex flex-col gap-4">
            {[
              { label: 'Original purchase price',   val: purchasePrice, set: setPurchasePrice, ph: '350000', note: 'Include all acquisition costs' },
              { label: 'Expected sale price',       val: salePrice,     set: setSalePrice,     ph: '550000', note: 'Net of any price reductions' },
              { label: 'Estimated selling costs',   val: sellingCosts,  set: setSellingCosts,  ph: '8000',   note: 'Agent fees, legal costs, etc.' },
              { label: 'Years of ownership',        val: yearsOwned,    set: setYearsOwned,    ph: '10',     note: 'Rounded to nearest year is fine' },
              { label: 'Other income this tax year',val: otherIncome,   set: setOtherIncome,   ph: '35000',  note: 'Salary, pension, other income — used to determine CGT rate' },
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

            {/* Main home toggle */}
            <div className="border border-[#f0eee8] p-4">
              <label className="flex items-center gap-3 cursor-pointer mb-3">
                <input type="checkbox" checked={wasMainHome}
                  onChange={e => setWasMainHome(e.target.checked)}
                  className="accent-[#277649] w-4 h-4" />
                <span className="font-sans text-[13px] text-text font-medium">
                  This property was once my main home (PPR may apply)
                </span>
              </label>
              {wasMainHome && (
                <div>
                  <label className="field-label">Years lived in as main home</label>
                  <input type="number" value={yearsAsHome} onChange={e => setYearsAsHome(e.target.value)}
                    placeholder="e.g. 3" className="field-input" />
                  <p className="font-sans text-[11px] text-text-faint mt-1">
                    Final 9 months automatically included in PPR relief
                  </p>
                </div>
              )}
            </div>
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
              <p className="eyebrow mb-6">CGT calculation</p>

              {/* Gain breakdown */}
              <div className="mb-6">
                <Row label="Gross gain"                                  value={fmt(results.grossGain)} />
                {results.prrRelief > 0      && <Row label="Private Residence Relief (PRR)" value={`-${fmt(results.prrRelief)}`} />}
                {results.lettingsRelief > 0 && <Row label="Lettings relief"                value={`-${fmt(results.lettingsRelief)}`} />}
                {results.aea > 0            && <Row label="Annual Exempt Amount (£3,000)"  value={`-${fmt(results.aea)}`} />}
                <Row label="Taxable gain"  value={fmt(results.taxableGain)} highlight />
              </div>

              {/* CGT breakdown */}
              {results.taxableGain > 0 && (
                <div className="mb-6">
                  {results.cgtAtBasic  > 0 && <Row label="CGT @ 18% (basic rate)" value={fmt(results.cgtAtBasic)} />}
                  {results.cgtAtHigher > 0 && <Row label="CGT @ 24% (higher rate)"value={fmt(results.cgtAtHigher)} />}
                </div>
              )}

              {/* Total CGT */}
              <div className="p-6 bg-white border border-[#e0e9e0] mb-4">
                <p className="font-sans text-[12px] uppercase tracking-widest text-text-faint mb-2">Total CGT payable</p>
                <p className="font-display text-[44px] leading-none" style={{ color: results.totalCGT > 0 ? '#c0392b' : 'var(--green)' }}>
                  {fmt(results.totalCGT)}
                </p>
                {results.effectiveRate > 0 && (
                  <p className="font-sans text-[12px] text-text-faint mt-2">
                    Effective rate: {results.effectiveRate.toFixed(1)}% of gross gain
                  </p>
                )}
              </div>

              {/* Net proceeds */}
              <div className="p-4 border border-[#e0e9e0] mb-6" style={{ background: 'var(--green-light)' }}>
                <div className="flex justify-between items-center">
                  <span className="font-sans text-[12px] uppercase tracking-widest font-semibold" style={{ color: 'var(--green-dark)' }}>
                    Estimated net proceeds
                  </span>
                  <span className="font-display text-[24px]" style={{ color: 'var(--green-dark)' }}>
                    {fmt(results.netProceeds)}
                  </span>
                </div>
                <p className="font-sans text-[11px] mt-1" style={{ color: 'var(--green)' }}>
                  After selling costs and CGT
                </p>
              </div>

              <div className="border-t border-[#e0e9e0] pt-6">
                <p className="font-sans text-[12px] text-text-muted leading-relaxed mb-4">
                  With specialist pre-sale planning, this liability can often be reduced. PRR elections, spousal transfers, and disposal timing each affect the outcome. These are estimates only.
                </p>
                <button onClick={onOpenModal} className="btn-primary w-full text-[13px] py-3">
                  Get CGT Planning Advice — Free
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
