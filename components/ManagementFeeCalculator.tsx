'use client'

import { useState } from 'react'

function fmt(n: number): string {
  return new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 }).format(n)
}

export default function ManagementFeeCalculator({ onOpenModal }: { onOpenModal: () => void }) {
  const [monthlyRent, setMonthlyRent] = useState('')
  const [feePercent, setFeePercent] = useState('10')
  const [tenantFindWeeks, setTenantFindWeeks] = useState('4')
  const [numProperties, setNumProperties] = useState('1')
  const [avgTenancy, setAvgTenancy] = useState('1')

  const mr = parseFloat(monthlyRent) || 0
  const fp = parseFloat(feePercent) || 0
  const tfw = parseFloat(tenantFindWeeks) || 0
  const np = parseFloat(numProperties) || 1
  const at = parseFloat(avgTenancy) || 1

  const weeklyRent = (mr * 12) / 52
  const monthlyMgmtCost = mr * (fp / 100)
  const annualMgmtCost = monthlyMgmtCost * 12
  const tenantFindCost = weeklyRent * tfw
  const tenantFindPerYear = tenantFindCost / at
  const totalAnnualPerProperty = annualMgmtCost + tenantFindPerYear
  const totalAnnualPortfolio = totalAnnualPerProperty * np

  // Self-management estimates
  const selfMgmtHoursPerMonth = 8
  const selfMgmtHourlyRate = 25
  const selfMgmtMonthlyCost = selfMgmtHoursPerMonth * selfMgmtHourlyRate
  const selfMgmtAnnualCost = selfMgmtMonthlyCost * 12
  const selfMgmtTenantFindCost = 350 // advertising, referencing, etc.
  const selfMgmtTenantFindPerYear = selfMgmtTenantFindCost / at
  const selfMgmtTotalAnnual = (selfMgmtAnnualCost + selfMgmtTenantFindPerYear) * np

  const hasResults = mr > 0

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-[#e8e4de]">
      {/* Inputs */}
      <div className="p-8 bg-white border-b lg:border-b-0 lg:border-r border-[#e8e4de]">
        <p className="eyebrow mb-6">Enter your figures</p>

        <div className="flex flex-col gap-5">
          <div>
            <label className="field-label">Monthly rent per property</label>
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
            <label className="field-label">Management fee (%)</label>
            <div className="relative">
              <input
                type="number"
                value={feePercent}
                onChange={e => setFeePercent(e.target.value)}
                placeholder="10"
                className="field-input pr-8"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 font-sans text-[15px] text-text-faint">%</span>
            </div>
            <p className="font-sans text-[11px] text-text-faint mt-1">Typical range: 8-15% of monthly rent</p>
          </div>

          <div>
            <label className="field-label">Tenant find fee (weeks of rent)</label>
            <input
              type="number"
              value={tenantFindWeeks}
              onChange={e => setTenantFindWeeks(e.target.value)}
              placeholder="4"
              className="field-input"
            />
            <p className="font-sans text-[11px] text-text-faint mt-1">Typically 4-6 weeks of rent</p>
          </div>

          <div>
            <label className="field-label">Number of properties</label>
            <input
              type="number"
              value={numProperties}
              onChange={e => setNumProperties(e.target.value)}
              placeholder="1"
              className="field-input"
            />
          </div>

          <div>
            <label className="field-label">Average tenancy length (years)</label>
            <input
              type="number"
              value={avgTenancy}
              onChange={e => setAvgTenancy(e.target.value)}
              placeholder="1"
              className="field-input"
              step="0.5"
            />
            <p className="font-sans text-[11px] text-text-faint mt-1">Affects how often tenant find fees apply</p>
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
            <p className="eyebrow mb-6">Professional management costs</p>

            <div className="grid grid-cols-2 gap-px bg-[#e0e9e0] mb-6">
              <div className="bg-white p-6">
                <p className="font-sans text-[12px] uppercase tracking-widest text-text-faint mb-2">Monthly cost</p>
                <p className="font-display text-[36px] leading-none" style={{ color: 'var(--green)' }}>
                  {fmt(monthlyMgmtCost)}
                </p>
                <p className="font-sans text-[11px] text-text-muted mt-1">Per property</p>
              </div>
              <div className="bg-white p-6">
                <p className="font-sans text-[12px] uppercase tracking-widest text-text-faint mb-2">Annual cost</p>
                <p className="font-display text-[36px] leading-none" style={{ color: 'var(--green)' }}>
                  {fmt(annualMgmtCost)}
                </p>
                <p className="font-sans text-[11px] text-text-muted mt-1">Per property</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-px bg-[#e0e9e0] mb-6">
              <div className="bg-white p-4 text-center">
                <p className="font-display text-[18px] text-text leading-none mb-1">{fmt(tenantFindCost)}</p>
                <p className="font-sans text-[10px] text-text-faint uppercase tracking-wide">Tenant find fee</p>
              </div>
              <div className="bg-white p-4 text-center">
                <p className="font-display text-[18px] text-text leading-none mb-1">{fmt(totalAnnualPortfolio)}</p>
                <p className="font-sans text-[10px] text-text-faint uppercase tracking-wide">Total annual ({np} {np === 1 ? 'property' : 'properties'})</p>
              </div>
            </div>

            {/* Comparison */}
            <div className="mb-6 p-6 bg-white border border-[#e0e9e0]">
              <p className="font-sans text-[12px] uppercase tracking-widest text-text-faint mb-4">Self-manage vs professional</p>
              <div className="flex flex-col gap-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-sans text-[11px] text-text-faint uppercase tracking-wide">Self-management (est.)</span>
                    <span className="font-sans text-[13px] font-semibold text-text">{fmt(selfMgmtTotalAnnual)}/yr</span>
                  </div>
                  <div className="h-3 bg-[#e0e9e0] rounded-full overflow-hidden">
                    <div className="h-full rounded-full transition-all duration-500"
                      style={{ width: `${Math.min(100, Math.round((selfMgmtTotalAnnual / Math.max(selfMgmtTotalAnnual, totalAnnualPortfolio, 1)) * 100))}%`, background: '#d4a017' }} />
                  </div>
                  <p className="font-sans text-[10px] text-text-faint mt-1">Based on ~{selfMgmtHoursPerMonth}hrs/month at {fmt(selfMgmtHourlyRate)}/hr + {fmt(selfMgmtTenantFindCost)} tenant find</p>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-sans text-[11px] text-text-faint uppercase tracking-wide">Professional management</span>
                    <span className="font-sans text-[13px] font-semibold text-text">{fmt(totalAnnualPortfolio)}/yr</span>
                  </div>
                  <div className="h-3 bg-[#e0e9e0] rounded-full overflow-hidden">
                    <div className="h-full rounded-full transition-all duration-500"
                      style={{ width: `${Math.min(100, Math.round((totalAnnualPortfolio / Math.max(selfMgmtTotalAnnual, totalAnnualPortfolio, 1)) * 100))}%`, background: 'var(--green)' }} />
                  </div>
                  <p className="font-sans text-[10px] text-text-faint mt-1">Management fee + tenant find amortised</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="border-t border-[#e0e9e0] pt-6">
              <p className="font-sans text-[13px] text-text-muted leading-relaxed mb-4">
                Professional management often pays for itself through faster lettings, fewer voids, and better tenant retention. Get matched with a vetted Harrow specialist to compare quotes.
              </p>
              <button onClick={onOpenModal} className="btn-primary w-full text-[13px] py-3">
                Get Matched With a Specialist — Free
              </button>
              <p className="font-sans text-[11px] text-text-faint text-center mt-3">
                Self-management costs are estimates based on average landlord time investment. Actual costs will vary.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
