'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Plus, Trash2, AlertTriangle, Info } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { HomepageTrustBar } from '@/components/HomepageTrustBar';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { siteConfig } from '@/data/site';

const INTEREST_RATE = 0.075;
const CURRENT_TAX_YEAR = 2026; // 2025/26

interface YearRow {
  id:         number;
  taxYear:    string;
  taxOwed:    number;
  daysLate:   number;
}

function calcYear(row: YearRow) {
  const { taxOwed, daysLate } = row;
  const base   = 100;
  const daily  = daysLate > 90 ? Math.min((daysLate - 90) * 10, 900) : 0;
  const p6     = daysLate >= 183 ? Math.max(taxOwed * 0.05, 300) : 0;
  const p12    = daysLate >= 366 ? Math.max(taxOwed * 0.05, 300) : 0;
  const penalty = base + daily + p6 + p12;
  const interest = Math.round(taxOwed * (INTEREST_RATE / 365) * daysLate);
  return { penalty, interest, total: penalty + interest, taxOwed };
}

function fmt(n: number) { return '£' + Math.round(n).toLocaleString('en-GB'); }

const TAX_YEARS = [
  '2024/25', '2023/24', '2022/23', '2021/22',
  '2020/21', '2019/20', '2018/19', '2017/18',
];

// Approximate days late from filing deadline (31 Jan following tax year end)
function defaultDaysLate(taxYear: string): number {
  const endYear = parseInt(taxYear.split('/')[1]) + 2000;
  const deadline = new Date(endYear, 0, 31); // 31 Jan
  const today = new Date();
  const days = Math.floor((today.getTime() - deadline.getTime()) / (1000 * 60 * 60 * 24));
  return Math.max(1, days);
}

let nextId = 3;

export default function MultiYearEstimatorClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rows, setRows] = useState<YearRow[]>([
    { id: 1, taxYear: '2023/24', taxOwed: 3000, daysLate: defaultDaysLate('2023/24') },
    { id: 2, taxYear: '2022/23', taxOwed: 3000, daysLate: defaultDaysLate('2022/23') },
  ]);

  function addYear() {
    const used = new Set(rows.map(r => r.taxYear));
    const next = TAX_YEARS.find(y => !used.has(y));
    if (!next) return;
    setRows(prev => [...prev, { id: nextId++, taxYear: next, taxOwed: 3000, daysLate: defaultDaysLate(next) }]);
  }

  function removeRow(id: number) {
    setRows(prev => prev.filter(r => r.id !== id));
  }

  function updateRow(id: number, field: keyof YearRow, value: string | number) {
    setRows(prev => prev.map(r => {
      if (r.id !== id) return r;
      const updated = { ...r, [field]: value };
      if (field === 'taxYear') updated.daysLate = defaultDaysLate(value as string);
      return updated;
    }));
  }

  const results = rows.map(r => ({ ...r, calc: calcYear(r) }));
  const totals = results.reduce((acc, r) => ({
    penalty:  acc.penalty  + r.calc.penalty,
    interest: acc.interest + r.calc.interest,
    taxOwed:  acc.taxOwed  + r.calc.taxOwed,
    total:    acc.total    + r.calc.total,
  }), { penalty: 0, interest: 0, taxOwed: 0, total: 0 });

  const assessmentRisk = rows.some(r => r.daysLate >= 366) ? 'high' : rows.some(r => r.daysLate >= 183) ? 'medium' : 'low';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'HMRC Multi-Year Tax Exposure Estimator',
    url: `${siteConfig.url}/tools/multi-year-estimator/`,
    description: 'Estimate your total HMRC penalty and interest exposure across multiple years of late Self Assessment returns.',
    applicationCategory: 'FinanceApplication',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP' },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main className="flex-grow">

        <section className="bg-brand-950 text-white py-12 md:py-16">
          <div className="container-width">
            <Breadcrumbs items={[{ label: 'Tools', href: '/tools/' }, { label: 'Multi-Year Estimator' }]} />
            <div className="max-w-2xl mt-6">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-brand-200 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide mb-5">
                Free Tool · Years Behind?
              </div>
              <h1 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4 leading-[1.1]">
                Multi-Year Late Return Exposure Estimator
              </h1>
              <p className="text-lg text-brand-200 leading-relaxed">
                Add each year you haven't filed. We calculate the total penalties, interest, and tax owed across all years — and show you what filing now would save.
              </p>
            </div>
          </div>
        </section>

        <HomepageTrustBar />

        <div className="container-width py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 items-start">

            {/* YEAR TABLE */}
            <div className="space-y-4">

              {/* Column headers */}
              <div className="hidden md:grid grid-cols-[160px_1fr_1fr_auto] gap-4 px-2 text-xs font-bold text-taupe uppercase tracking-wide">
                <span>Tax year</span>
                <span>Estimated tax owed</span>
                <span>Days overdue (auto-filled)</span>
                <span></span>
              </div>

              {rows.map((row, i) => {
                const calc = calcYear(row);
                return (
                  <div key={row.id} className="bg-white border border-sand-mid/40 rounded-2xl p-5">
                    <div className="grid grid-cols-1 md:grid-cols-[160px_1fr_1fr_auto] gap-4 items-center mb-4">

                      {/* Tax year select */}
                      <select
                        value={row.taxYear}
                        onChange={e => updateRow(row.id, 'taxYear', e.target.value)}
                        className="w-full py-2.5 px-3 border border-sand-mid/60 bg-cream rounded-lg text-sm text-brand-900 focus:outline-none focus:ring-2 focus:ring-brand-500"
                      >
                        {TAX_YEARS.map(y => (
                          <option key={y} value={y} disabled={rows.some(r => r.id !== row.id && r.taxYear === y)}>
                            {y}
                          </option>
                        ))}
                      </select>

                      {/* Tax owed */}
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-taupe text-sm font-bold">£</span>
                        <input
                          type="number"
                          min={0}
                          step={100}
                          value={row.taxOwed}
                          onChange={e => updateRow(row.id, 'taxOwed', Math.max(0, Number(e.target.value)))}
                          className="w-full pl-7 pr-3 py-2.5 border border-sand-mid/60 bg-cream rounded-lg text-sm text-brand-900 focus:outline-none focus:ring-2 focus:ring-brand-500"
                        />
                      </div>

                      {/* Days late */}
                      <div className="relative">
                        <input
                          type="number"
                          min={1}
                          max={3650}
                          value={row.daysLate}
                          onChange={e => updateRow(row.id, 'daysLate', Math.max(1, Number(e.target.value)))}
                          className="w-full px-3 py-2.5 border border-sand-mid/60 bg-cream rounded-lg text-sm text-brand-900 focus:outline-none focus:ring-2 focus:ring-brand-500"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-taupe">days</span>
                      </div>

                      {/* Remove */}
                      {rows.length > 1 && (
                        <button
                          onClick={() => removeRow(row.id)}
                          className="p-2 text-taupe hover:text-red-500 transition-colors"
                          aria-label="Remove year"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>

                    {/* Year result strip */}
                    <div className="grid grid-cols-4 gap-2 bg-cream rounded-xl p-3">
                      {[
                        { label: 'Penalties', value: calc.penalty },
                        { label: 'Interest', value: calc.interest },
                        { label: 'Tax owed', value: calc.taxOwed },
                        { label: 'Year total', value: calc.total + calc.taxOwed },
                      ].map(c => (
                        <div key={c.label} className="text-center">
                          <p className="text-[10px] text-taupe mb-0.5">{c.label}</p>
                          <p className={`text-sm font-bold ${c.label === 'Year total' ? 'text-brand-900' : 'text-brand-700'}`}>
                            {fmt(c.value)}
                          </p>
                        </div>
                      ))}
                    </div>

                    {row.daysLate >= 366 && (
                      <div className="mt-3 flex items-center gap-2 text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                        <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0" />
                        HMRC may have issued a determination for this year — enforcement risk is significant.
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Add year */}
              {rows.length < TAX_YEARS.length && (
                <button
                  onClick={addYear}
                  className="w-full flex items-center justify-center gap-2 py-4 border-2 border-dashed border-sand-mid/60 rounded-2xl text-sm font-semibold text-taupe hover:border-brand-400 hover:text-brand-500 transition-all"
                >
                  <Plus className="w-4 h-4" /> Add another year
                </button>
              )}

              <div className="flex items-start gap-2 text-xs text-taupe bg-cream border border-sand-mid/40 rounded-xl p-4">
                <Info className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                Days overdue are auto-calculated from the 31 January deadline for each tax year. Adjust manually if you know a different date. Interest calculated at 7.5% p.a. (HMRC rate as at March 2026).
              </div>
            </div>

            {/* TOTALS SIDEBAR */}
            <div className="space-y-5 sticky top-24">

              {/* Grand total */}
              <div className="bg-brand-900 rounded-2xl p-6 text-center">
                <p className="text-xs font-bold text-brand-300 uppercase tracking-widest mb-2">Total exposure</p>
                <p className="font-display text-4xl font-bold text-white mb-1">
                  {fmt(totals.total + totals.taxOwed)}
                </p>
                <p className="text-brand-300 text-xs">{rows.length} year{rows.length !== 1 ? 's' : ''} outstanding</p>
              </div>

              {/* Breakdown */}
              <div className="bg-white border border-sand-mid/40 rounded-2xl p-5">
                <p className="text-xs font-bold text-taupe uppercase tracking-widest mb-4">Breakdown</p>
                <div className="space-y-3">
                  {[
                    { label: 'Total tax owed', value: totals.taxOwed, color: 'text-brand-900' },
                    { label: 'Total penalties', value: totals.penalty, color: 'text-orange-600' },
                    { label: 'Total interest', value: totals.interest, color: 'text-brand-500' },
                    { label: 'Penalties + interest', value: totals.penalty + totals.interest, color: 'text-red-600' },
                  ].map(r => (
                    <div key={r.label} className="flex justify-between items-center text-sm border-b border-sand-mid/30 pb-2 last:border-0 last:pb-0">
                      <span className="text-taupe">{r.label}</span>
                      <span className={`font-bold ${r.color}`}>{fmt(r.value)}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Risk assessment */}
              <div className={`rounded-2xl p-5 border ${
                assessmentRisk === 'high'   ? 'bg-red-50 border-red-200'
                : assessmentRisk === 'medium' ? 'bg-warn-bg border-warn-border'
                : 'bg-brand-50 border-brand-100'
              }`}>
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className={`w-4 h-4 ${
                    assessmentRisk === 'high' ? 'text-red-500' : assessmentRisk === 'medium' ? 'text-warn-text' : 'text-brand-500'
                  }`} />
                  <p className="text-sm font-bold text-brand-900">
                    {assessmentRisk === 'high' ? 'High enforcement risk' : assessmentRisk === 'medium' ? 'Escalating penalties active' : 'Act now to limit exposure'}
                  </p>
                </div>
                <p className="text-xs text-taupe leading-relaxed">
                  {assessmentRisk === 'high'
                    ? 'One or more years are past 12 months. HMRC has enforcement powers including determinations, bailiff instructions, and bank account freezing.'
                    : assessmentRisk === 'medium'
                    ? 'One or more years are past 6 months. The tax-based surcharges are now active and compounding.'
                    : 'No years have hit the 6-month surcharge threshold yet. Filing now prevents the largest charges from triggering.'
                  }
                </p>
              </div>

              {/* What voluntary disclosure could save */}
              <div className="bg-cream border border-sand-mid/40 rounded-2xl p-5">
                <p className="text-xs font-bold text-brand-900 mb-3">What voluntary disclosure typically saves</p>
                <div className="space-y-2 text-xs text-taupe">
                  <p>Coming forward before HMRC contacts you qualifies as an "unprompted disclosure" — HMRC reduces penalty percentages by up to 30% compared to a prompted disclosure.</p>
                  <p className="font-semibold text-brand-900">On {fmt(totals.penalty)} in penalties, that's a potential saving of up to {fmt(totals.penalty * 0.3)}.</p>
                </div>
              </div>

              <button onClick={() => setIsModalOpen(true)} className="w-full btn-primary !py-3.5 justify-center !text-[14px]">
                Get Free Confidential Assessment <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-center text-xs text-taupe">
              </p>
            </div>

          </div>

          {/* Related */}
          <div className="mt-16 border-t border-sand-mid/40 pt-12">
            <p className="text-sm font-bold text-brand-900 mb-5">Other free tools</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { href: '/tools/hmrc-penalty-calculator/', title: 'Single Year Penalty Calculator', desc: 'Exact penalty + interest for one late return.' },
                { href: '/tools/appeal-deadline-checker/', title: 'Appeal Deadline Checker', desc: 'Is your 30-day appeal window still open?' },
                { href: '/tools/corporation-tax-calculator/', title: 'Corporation Tax Penalty Calculator', desc: 'CT600 + Companies House fines for companies.' },
              ].map(t => (
                <Link key={t.href} href={t.href} className="group block bg-white border border-sand-mid/40 rounded-xl p-5 hover:border-brand-400 transition-all">
                  <h3 className="font-bold text-brand-900 group-hover:text-brand-500 transition-colors mb-1 text-sm">{t.title}</h3>
                  <p className="text-xs text-taupe">{t.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
