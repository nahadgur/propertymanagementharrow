'use client'

import { useState } from 'react'

function fmt(n: number): string {
  return new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 }).format(n)
}

function pct(n: number): string {
  return n.toFixed(2) + '%'
}

export default function RentalYieldCalculator({ onOpenModal }: { onOpenModal: () => void }) {
  const [propertyValue, setPropertyValue] = useState('')
  const [monthlyRent, setMonthlyRent] = useState('')
  const [managementFees, setManagementFees] = useState('')
  const [insurance, setInsurance] = useState('')
  const [maintenance, setMaintenance] = useState('')
  const [voidAllowance, setVoidAllowance] = useState('')

  const pv = parseFloat(propertyValue) || 0
  const mr = parseFloat(monthlyRent) || 0
  const annualRent = mr * 12
  const mf = parseFloat(managementFees) || 0
  const ins = parseFloat(insurance) || 0
  const maint = parseFloat(maintenance) || 0
  const va = parseFloat(voidAllowance) || 0
  const totalCosts = mf + ins + maint + va

  const hasResults = pv > 0 && mr > 0
  const grossYield = hasResults ? (annualRent / pv) * 100 : 0
  const netIncome = annualRent - totalCosts
  const netYield = hasResults ? (netIncome / pv) * 100 : 0

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-[#e8e4de]">
      {/* Inputs */}
      <div className="p-8 bg-white border-b lg:border-b-0 lg:border-r border-[#e8e4de]">
        <p className="eyebrow mb-6">Enter your figures</p>

        <div className="flex flex-col gap-5">
          <div>
            <label className="field-label">Property value</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-sans text-[15px] text-text-faint">&pound;</span>
              <input
                type="number"
                value={propertyValue}
                onChange={e => setPropertyValue(e.target.value)}
                placeholder="e.g. 350000"
                className="field-input pl-8"
              />
            </div>
            <p className="font-sans text-[11px] text-text-faint mt-1">Current market value or purchase price</p>
          </div>

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
            <p className="font-sans text-[11px] text-text-faint mt-1">Gross monthly rental income</p>
          </div>

          <p className="eyebrow mt-2">Annual costs (optional)</p>

          <div>
            <label className="field-label">Management fees (annual)</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-sans text-[15px] text-text-faint">&pound;</span>
              <input
                type="number"
                value={managementFees}
                onChange={e => setManagementFees(e.target.value)}
                placeholder="e.g. 1800"
                className="field-input pl-8"
              />
            </div>
          </div>

          <div>
            <label className="field-label">Insurance (annual)</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-sans text-[15px] text-text-faint">&pound;</span>
              <input
                type="number"
                value={insurance}
                onChange={e => setInsurance(e.target.value)}
                placeholder="e.g. 300"
                className="field-input pl-8"
              />
            </div>
          </div>

          <div>
            <label className="field-label">Maintenance (annual)</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-sans text-[15px] text-text-faint">&pound;</span>
              <input
                type="number"
                value={maintenance}
                onChange={e => setMaintenance(e.target.value)}
                placeholder="e.g. 1200"
                className="field-input pl-8"
              />
            </div>
          </div>

          <div>
            <label className="field-label">Void allowance (annual)</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-sans text-[15px] text-text-faint">&pound;</span>
              <input
                type="number"
                value={voidAllowance}
                onChange={e => setVoidAllowance(e.target.value)}
                placeholder="e.g. 750"
                className="field-input pl-8"
              />
            </div>
            <p className="font-sans text-[11px] text-text-faint mt-1">Estimated lost rent during empty periods</p>
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

            {/* Main results */}
            <div className="grid grid-cols-2 gap-px bg-[#e0e9e0] mb-6">
              <div className="bg-white p-6">
                <p className="font-sans text-[12px] uppercase tracking-widest text-text-faint mb-2">Gross yield</p>
                <p className="font-display text-[40px] leading-none" style={{ color: 'var(--green)' }}>
                  {pct(grossYield)}
                </p>
              </div>
              <div className="bg-white p-6">
                <p className="font-sans text-[12px] uppercase tracking-widest text-text-faint mb-2">Net yield</p>
                <p className="font-display text-[40px] leading-none" style={{ color: netYield >= 5 ? 'var(--green)' : netYield >= 3 ? '#d4a017' : '#c0392b' }}>
                  {pct(netYield)}
                </p>
              </div>
            </div>

            {/* Breakdown */}
            <div className="mb-6 p-6 bg-white border border-[#e0e9e0]">
              <p className="font-sans text-[12px] uppercase tracking-widest text-text-faint mb-2">Annual net income</p>
              <p className="font-display text-[36px] leading-none mb-1" style={{ color: netIncome >= 0 ? 'var(--green)' : '#c0392b' }}>
                {fmt(netIncome)}
              </p>
              <p className="font-sans text-[13px] text-text-muted">After deducting {fmt(totalCosts)} in annual costs</p>
            </div>

            <div className="grid grid-cols-2 gap-px bg-[#e0e9e0] mb-6">
              {[
                { label: 'Annual rent', value: fmt(annualRent) },
                { label: 'Annual costs', value: fmt(totalCosts) },
                { label: 'Monthly net', value: fmt(netIncome / 12) },
                { label: 'Property value', value: fmt(pv) },
              ].map(s => (
                <div key={s.label} className="bg-white p-4 text-center">
                  <p className="font-display text-[18px] text-text leading-none mb-1">{s.value}</p>
                  <p className="font-sans text-[10px] text-text-faint uppercase tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="border-t border-[#e0e9e0] pt-6">
              <p className="font-sans text-[13px] text-text-muted leading-relaxed mb-4">
                A professional property manager can help maximise your yield by reducing voids, optimising rent, and controlling maintenance costs.
              </p>
              <button onClick={onOpenModal} className="btn-primary w-full text-[13px] py-3">
                Get Matched With a Specialist — Free
              </button>
              <p className="font-sans text-[11px] text-text-faint text-center mt-3">
                These are estimates for illustrative purposes only. Actual yields will vary based on property-specific factors.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
