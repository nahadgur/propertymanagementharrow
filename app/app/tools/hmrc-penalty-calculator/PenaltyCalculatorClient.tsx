'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { ArrowRight, Info, AlertTriangle } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { HomepageTrustBar } from '@/components/HomepageTrustBar';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { siteConfig } from '@/data/site';

// HMRC interest rate: Bank of England base rate + 2.5%
// As at March 2026 — update when BoE rate changes
const HMRC_DAILY_INTEREST_RATE = 0.075 / 365; // 7.5% annual / 365

function calcPenalties(daysLate: number, taxOwed: number) {
  const base = 100;
  const daily = daysLate >= 91  ? 900
              : daysLate >= 1    ? Math.min((Math.max(0, daysLate - 1)) * 10, 900)
              : 0;
  // Actually: daily starts at 3 months (day 91 from deadline), runs 90 days max
  const dailyActual = daysLate > 90 ? Math.min((daysLate - 90) * 10, 900) : 0;
  const p6  = daysLate >= 183 ? Math.max(taxOwed * 0.05, 300) : 0;
  const p12 = daysLate >= 366 ? Math.max(taxOwed * 0.05, 300) : 0;
  const totalPenalty = base + dailyActual + p6 + p12;
  const interest = Math.round(taxOwed * HMRC_DAILY_INTEREST_RATE * daysLate);
  return { base, daily: dailyActual, p6, p12, totalPenalty, interest, grandTotal: totalPenalty + interest };
}

function fmt(n: number) {
  return '£' + Math.round(n).toLocaleString('en-GB');
}

function Bar({ label, value, max, color }: { label: string; value: number; max: number; color: string }) {
  const pct = max > 0 ? Math.min((value / max) * 100, 100) : 0;
  if (value <= 0) return null;
  return (
    <div className="mb-3">
      <div className="flex justify-between text-xs mb-1">
        <span className="text-taupe">{label}</span>
        <span className="font-bold text-brand-900">{fmt(value)}</span>
      </div>
      <div className="h-2 bg-sand-light rounded-full overflow-hidden">
        <div className={`h-full rounded-full transition-all duration-500 ${color}`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

export default function PenaltyCalculatorClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [daysLate, setDaysLate] = useState(90);
  const [taxOwed, setTaxOwed] = useState(5000);

  const results = calcPenalties(daysLate, taxOwed);
  const max = results.grandTotal || 1;

  const urgencyMsg = daysLate < 90
    ? { level: 'warn', text: `Daily charges start in ${90 - daysLate} days. Filing now keeps your total at ${fmt(results.grandTotal)}.` }
    : daysLate < 183
    ? { level: 'danger', text: `Daily charges are running. The 6-month surcharge adds ${fmt(Math.max(taxOwed * 0.05, 300))} in ${183 - daysLate} days.` }
    : daysLate < 366
    ? { level: 'danger', text: `6-month surcharge has triggered. The 12-month surcharge and enforcement risk begin in ${366 - daysLate} days.` }
    : { level: 'critical', text: `You are past 12 months. HMRC has full enforcement powers including determinations, bailiffs, and charging orders.` };

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'HMRC Late Self Assessment Penalty Calculator',
    url: `${siteConfig.url}/tools/hmrc-penalty-calculator/`,
    description: 'Calculate your exact HMRC late filing penalty plus interest based on how many days overdue your Self Assessment return is.',
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
            <Breadcrumbs items={[{ label: 'Tools', href: '/tools/' }, { label: 'Penalty Calculator' }]} />
            <div className="max-w-2xl mt-6">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-brand-200 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide mb-5">
                Free Tool · Updated March 2026
              </div>
              <h1 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4 leading-[1.1]">
                HMRC Late Filing Penalty Calculator
              </h1>
              <p className="text-lg text-brand-200 leading-relaxed">
                Enter how late your Self Assessment return is and your estimated tax bill. We calculate your exact penalty charges plus HMRC interest — updated for 2025/26 rates.
              </p>
            </div>
          </div>
        </section>

        <HomepageTrustBar />

        <div className="container-width py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* INPUTS */}
            <div className="space-y-6">

              {/* Days late slider */}
              <div className="bg-white border border-sand-mid/40 rounded-2xl p-6">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-bold text-brand-900">How many days late is your return?</label>
                  <span className="font-display text-2xl font-bold text-brand-500">{daysLate} days</span>
                </div>
                <input
                  type="range" min={1} max={730} step={1} value={daysLate}
                  onChange={e => setDaysLate(Number(e.target.value))}
                  className="w-full accent-brand-500 mb-3"
                />
                <div className="flex justify-between text-xs text-taupe">
                  <span>1 day</span>
                  <span className="text-warn-text font-bold">90 days (daily fines start)</span>
                  <span>2 years</span>
                </div>

                {/* Milestone pills */}
                <div className="flex gap-2 flex-wrap mt-4">
                  {[
                    { label: '1 day', days: 1 },
                    { label: '3 months', days: 91 },
                    { label: '6 months', days: 183 },
                    { label: '1 year', days: 366 },
                    { label: '2 years', days: 730 },
                  ].map(m => (
                    <button
                      key={m.days}
                      onClick={() => setDaysLate(m.days)}
                      className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all ${
                        daysLate === m.days
                          ? 'bg-brand-500 text-white border-brand-500'
                          : 'bg-cream border-sand-mid/60 text-taupe hover:border-brand-400 hover:text-brand-900'
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tax owed slider */}
              <div className="bg-white border border-sand-mid/40 rounded-2xl p-6">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-bold text-brand-900">Estimated tax owed (Self Assessment)</label>
                  <span className="font-display text-2xl font-bold text-brand-500">
                    {taxOwed === 0 ? '£0' : fmt(taxOwed)}
                  </span>
                </div>
                <input
                  type="range" min={0} max={100000} step={500} value={taxOwed}
                  onChange={e => setTaxOwed(Number(e.target.value))}
                  className="w-full accent-brand-500 mb-3"
                />
                <div className="flex justify-between text-xs text-taupe">
                  <span>£0 (nil return)</span>
                  <span>£50,000</span>
                  <span>£100,000</span>
                </div>
                <p className="text-xs text-taupe mt-3 flex items-start gap-1.5">
                  <Info className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                  Not sure? Use your best estimate — you can amend the return later. Penalties still apply on nil returns.
                </p>
              </div>

              {/* Urgency alert */}
              <div className={`rounded-xl p-4 flex items-start gap-3 ${
                urgencyMsg.level === 'critical' ? 'bg-red-50 border border-red-200'
                : urgencyMsg.level === 'danger'  ? 'bg-warn-bg border border-warn-border'
                : 'bg-brand-50 border border-brand-100'
              }`}>
                <AlertTriangle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                  urgencyMsg.level === 'critical' ? 'text-red-500'
                  : urgencyMsg.level === 'danger'  ? 'text-warn-text'
                  : 'text-brand-500'
                }`} />
                <p className={`text-sm leading-relaxed ${
                  urgencyMsg.level === 'critical' ? 'text-red-700'
                  : urgencyMsg.level === 'danger'  ? 'text-warn-text'
                  : 'text-brand-700'
                }`}>
                  {urgencyMsg.text}
                </p>
              </div>

              <div className="text-xs text-taupe leading-relaxed">
                <strong className="text-brand-900">Assumptions:</strong> Self Assessment (individual). HMRC interest rate 7.5% p.a. (Bank of England base rate 5.0% + 2.5%), current as at March 2026. Penalty figures based on published HMRC schedule. Results are indicative — actual figures depend on your specific filing history.
              </div>
            </div>

            {/* RESULTS */}
            <div className="space-y-5">

              {/* Grand total */}
              <div className="bg-brand-900 rounded-2xl p-7 text-center">
                <p className="text-xs font-bold text-brand-300 uppercase tracking-widest mb-2">Total estimated exposure</p>
                <p className="font-display text-5xl font-bold text-white mb-1">{fmt(results.grandTotal)}</p>
                <p className="text-brand-300 text-sm">Penalties ({fmt(results.totalPenalty)}) + interest ({fmt(results.interest)})</p>
              </div>

              {/* Breakdown */}
              <div className="bg-white border border-sand-mid/40 rounded-2xl p-6">
                <p className="text-xs font-bold text-taupe uppercase tracking-widest mb-5">Full breakdown</p>

                <Bar label="Initial £100 fixed penalty" value={results.base} max={max} color="bg-amber-400" />
                <Bar label="Daily charges (£10/day, max 90 days)" value={results.daily} max={max} color="bg-orange-400" />
                <Bar label="6-month surcharge (5% of tax or £300)" value={results.p6} max={max} color="bg-red-400" />
                <Bar label="12-month surcharge (5% of tax or £300 again)" value={results.p12} max={max} color="bg-red-600" />
                <Bar label="HMRC interest on unpaid tax (7.5% p.a.)" value={results.interest} max={max} color="bg-brand-400" />

                <div className="border-t border-sand-mid/40 pt-4 mt-4">
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: 'Total penalties', value: results.totalPenalty },
                      { label: 'Interest on tax', value: results.interest },
                      { label: 'Tax owed', value: taxOwed },
                      { label: 'Grand total', value: results.grandTotal + taxOwed },
                    ].map(r => (
                      <div key={r.label} className={`rounded-xl p-3 ${r.label === 'Grand total' ? 'bg-brand-900 col-span-2' : 'bg-cream'}`}>
                        <p className={`text-xs mb-0.5 ${r.label === 'Grand total' ? 'text-brand-300' : 'text-taupe'}`}>{r.label}</p>
                        <p className={`font-display text-xl font-bold ${r.label === 'Grand total' ? 'text-sand' : 'text-brand-900'}`}>{fmt(r.value)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* What saves how much */}
              <div className="bg-cream border border-sand-mid/40 rounded-2xl p-6">
                <p className="text-xs font-bold text-brand-900 mb-4">What filing TODAY saves vs. waiting</p>
                {[
                  { label: 'vs. waiting to 3 months', save: calcPenalties(91, taxOwed).totalPenalty - results.totalPenalty },
                  { label: 'vs. waiting to 6 months', save: calcPenalties(183, taxOwed).totalPenalty - results.totalPenalty },
                  { label: 'vs. waiting to 12 months', save: calcPenalties(366, taxOwed).totalPenalty - results.totalPenalty },
                ].filter(r => r.save > 0).map(r => (
                  <div key={r.label} className="flex justify-between items-center py-2 border-b border-sand-mid/30 last:border-0">
                    <span className="text-sm text-taupe">{r.label}</span>
                    <span className="text-sm font-bold text-brand-500">Save {fmt(r.save)}</span>
                  </div>
                ))}
                {results.daily === 0 && daysLate < 90 && (
                  <p className="text-sm text-brand-500 font-semibold">Filing now avoids all daily charges — you're still in the fixed penalty window.</p>
                )}
                {daysLate >= 366 && (
                  <p className="text-sm text-taupe leading-relaxed">You're past all major penalty thresholds. Every further day adds HMRC interest — file immediately to stop the clock.</p>
                )}
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full btn-primary !py-4 justify-center !text-[15px]"
              >
                Stop My Penalties — Get Free Assessment <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-center text-xs text-taupe">
              </p>
            </div>
          </div>

          {/* Related tools */}
          <div className="mt-16 border-t border-sand-mid/40 pt-12">
            <p className="text-sm font-bold text-brand-900 mb-5">Other free tools</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { href: '/tools/appeal-deadline-checker/', title: 'Appeal Deadline Checker', desc: 'Is your 30-day penalty appeal window still open?' },
                { href: '/tools/multi-year-estimator/', title: 'Multi-Year Exposure Estimator', desc: 'How much do you owe across multiple late years?' },
                { href: '/tools/corporation-tax-calculator/', title: 'Corporation Tax Penalty Calculator', desc: 'CT600 + Companies House fines for limited companies.' },
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
