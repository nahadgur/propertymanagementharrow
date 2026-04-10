'use client'

import { useState } from 'react'

function fmt(n: number): string {
  return new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 }).format(n)
}

export default function VoidCostCalculator({ onOpenModal }: { onOpenModal: () => void }) {
  const [monthlyRent, setMonthlyRent] = useState('')
  const [voidWeeks, setVoidWeeks] = useState('')
  const [cleaningCost, setCleaningCost] = useState('')
  const [marketingCost, setMarketingCost] = useState('')
  const [referencingCost, setReferencingCost] = useState('')
  const [mortgagePayment, setMortgagePayment] = useState('')

  const mr = parseFloat(monthlyRent) || 0
  const vw = parseFloat(voidWeeks) || 0
  const cl = parseFloat(cleaningCost) || 0
  const mk = parseFloat(marketingCost) || 0
  const rf = parseFloat(referencingCost) || 0
  const mp = parseFloat(mortgagePayment) || 0

  const weeklyRent = (mr * 12) / 52
  const lostRent = weeklyRent * vw
  const reLettingCosts = cl + mk + rf
  const mortgageDuringVoid = (mp / 4.33) * vw // weekly mortgage cost * void weeks
  const totalVoidCost = lostRent + reLettingCosts + mortgageDuringVoid
  const annualRent = mr * 12
  const costAsPercentOfAnnual = annualRent > 0 ? (totalVoidCost / annualRent) * 100 : 0

  // Break-even: how many days faster does professional management need to let
  // to cover a typical 10% annual management fee
  const annualMgmtFee = annualRent * 0.10
  const dailyVoidCost = weeklyRent / 7 + (mp / 30)
  const breakEvenDays = dailyVoidCost > 0 ? Math.ceil(annualMgmtFee / dailyVoidCost) : 0

  const hasResults = mr > 0 && vw > 0

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-[#e8e4de]">
      {/* Inputs */}
      <div className="p-8 bg-white border-b lg:border-b-0 lg:border-r border-[#e8e4de]">
        <p className="eyebrow mb-6">Enter your figures</p>

        <div className="flex flex-col gap-5">
          <div>
            <label className="field-label">Monthly rent</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-sans text-[15px] text-text-faint">&pound;</span>
              <input
                type="number"
                value={monthlyRent}
                onChange={e => setMonthlyRent(e.target.value)}
                placeholder="e.g. 1500"
                className="field-input pl-8"
              />
            </div>
          </div>

          <div>
            <label className="field-label">Void period (weeks)</label>
            <input
              type="number"
              value={voidWeeks}
              onChange={e => setVoidWeeks(e.target.value)}
              placeholder="e.g. 3"
              className="field-input"
            />
            <p className="font-sans text-[11px] text-text-faint mt-1">How many weeks the property sits empty</p>
          </div>

          <p className="eyebrow mt-2">Re-letting costs</p>

          <div>
            <label className="field-label">Cleaning / preparation</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-sans text-[15px] text-text-faint">&pound;</span>
              <input
                type="number"
                value={cleaningCost}
                onChange={e => setCleaningCost(e.target.value)}
                placeholder="e.g. 250"
                className="field-input pl-8"
              />
            </div>
          </div>

          <div>
            <label className="field-label">Marketing / advertising</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-sans text-[15px] text-text-faint">&pound;</span>
              <input
                type="number"
                value={marketingCost}
                onChange={e => setMarketingCost(e.target.value)}
                placeholder="e.g. 150"
                className="field-input pl-8"
              />
            </div>
          </div>

          <div>
            <label className="field-label">Tenant referencing</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-sans text-[15px] text-text-faint">&pound;</span>
              <input
                type="number"
                value={referencingCost}
                onChange={e => setReferencingCost(e.target.value)}
                placeholder="e.g. 100"
                className="field-input pl-8"
              />
            </div>
          </div>

          <div>
            <label className="field-label">Monthly mortgage payment</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-sans text-[15px] text-text-faint">&pound;</span>
              <input
                type="number"
                value={mortgagePayment}
                onChange={e => setMortgagePayment(e.target.value)}
                placeholder="e.g. 800"
                className="field-input pl-8"
              />
            </div>
            <p className="font-sans text-[11px] text-text-faint mt-1">Still payable during void periods</p>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="p-8" style={{ background: 'var(--green-soft)' }}>
        {!hasResults ? (
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
            <div className="mb-6 p-6 bg-white border border-[#e0e9e0]">
              <p className="font-sans text-[12px] uppercase tracking-widest text-text-faint mb-2">Total void cost</p>
              <p className="font-display text-[48px] leading-none mb-1" style={{ color: '#c0392b' }}>
                {fmt(totalVoidCost)}
              </p>
              <p className="font-sans text-[13px] text-text-muted">
                {costAsPercentOfAnnual.toFixed(1)}% of your annual rental income
              </p>
            </div>

            {/* Breakdown */}
            <div className="grid grid-cols-3 gap-px bg-[#e0e9e0] mb-6">
              {[
                { label: 'Lost rent', value: fmt(lostRent) },
                { label: 'Re-letting', value: fmt(reLettingCosts) },
                { label: 'Mortgage', value: fmt(mortgageDuringVoid) },
              ].map(s => (
                <div key={s.label} className="bg-white p-4 text-center">
                  <p className="font-display text-[18px] text-text leading-none mb-1">{s.value}</p>
                  <p className="font-sans text-[10px] text-text-faint uppercase tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Break-even analysis */}
            <div className="mb-6 p-6 bg-white border border-[#e0e9e0]">
              <p className="font-sans text-[12px] uppercase tracking-widest text-text-faint mb-2">Break-even point</p>
              <p className="font-display text-[36px] leading-none mb-1" style={{ color: 'var(--green)' }}>
                {breakEvenDays} days
              </p>
              <p className="font-sans text-[13px] text-text-muted leading-relaxed">
                If a professional manager lets your property {breakEvenDays} days faster per year than you could self-manage, their 10% fee pays for itself in reduced void costs alone.
              </p>
            </div>

            {/* Cost per day visual */}
            <div className="mb-6 p-4 bg-white border border-[#e0e9e0]">
              <div className="flex justify-between items-center">
                <span className="font-sans text-[12px] text-text-faint uppercase tracking-wide">Daily void cost</span>
                <span className="font-display text-[20px] text-text">{fmt(dailyVoidCost)}</span>
              </div>
              <p className="font-sans text-[10px] text-text-faint mt-1">Every empty day costs you this in lost rent and mortgage</p>
            </div>

            {/* CTA */}
            <div className="border-t border-[#e0e9e0] pt-6">
              <p className="font-sans text-[13px] text-text-muted leading-relaxed mb-4">
                Professional property managers typically reduce void periods significantly through better marketing, faster turnarounds, and proactive tenant retention strategies.
              </p>
              <button onClick={onOpenModal} className="btn-primary w-full text-[13px] py-3">
                Get Matched With a Specialist — Free
              </button>
              <p className="font-sans text-[11px] text-text-faint text-center mt-3">
                These are estimates for illustrative purposes only. Actual void costs depend on local market conditions and property type.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
