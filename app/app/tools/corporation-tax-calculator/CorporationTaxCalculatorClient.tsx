'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, AlertTriangle, Info } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { HomepageTrustBar } from '@/components/HomepageTrustBar';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { siteConfig } from '@/data/site';

function fmt(n: number) { return '£' + Math.round(n).toLocaleString('en-GB'); }

function calcCT(daysLate: number, ctOwed: number, consecutiveLate: boolean) {
  // HMRC CT600 penalties
  let hmrcFlat = 0;
  let hmrcPct  = 0;

  if (daysLate >= 1)   hmrcFlat = consecutiveLate ? 200 : 100;
  if (daysLate >= 91)  hmrcFlat = consecutiveLate ? 400 : 200;
  if (daysLate >= 183) hmrcPct  = ctOwed * 0.10;
  if (daysLate >= 366) hmrcPct += ctOwed * 0.10;

  const hmrcTotal = hmrcFlat + hmrcPct;

  // Companies House penalties (private company)
  let chPenalty = 0;
  // CH deadline is 9 months after period end; CT600 deadline is 12 months
  // We use days late relative to the Companies House deadline
  // (approximately 3 months earlier than CT600 deadline)
  const chDaysLate = daysLate + 91; // CH deadline ~3 months before CT deadline
  if (chDaysLate >= 1   && chDaysLate < 30)  chPenalty = 150;
  if (chDaysLate >= 30  && chDaysLate < 91)  chPenalty = 375;
  if (chDaysLate >= 91  && chDaysLate < 183) chPenalty = 750;
  if (chDaysLate >= 183) chPenalty = 1500;
  if (consecutiveLate) chPenalty *= 2;

  // Interest on unpaid CT (HMRC rate 7.5% p.a.)
  const interest = Math.round(ctOwed * (0.075 / 365) * daysLate);

  return { hmrcFlat, hmrcPct, hmrcTotal, chPenalty, interest, grandTotal: hmrcTotal + chPenalty + interest };
}

export default function CorporationTaxCalculatorClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [daysLate, setDaysLate] = useState(60);
  const [ctOwed, setCtOwed] = useState(10000);
  const [consecutive, setConsecutive] = useState(false);

  const r = calcCT(daysLate, ctOwed, consecutive);
  const max = r.grandTotal || 1;

  function pct(val: number) { return `${Math.min((val / max) * 100, 100).toFixed(1)}%`; }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Corporation Tax Penalty Calculator — CT600 & Companies House',
    url: `${siteConfig.url}/tools/corporation-tax-calculator/`,
    description: 'Calculate both the HMRC CT600 late filing penalty and the Companies House late accounts fine for your limited company — in one place.',
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
            <Breadcrumbs items={[{ label: 'Tools', href: '/tools/' }, { label: 'Corporation Tax Calculator' }]} />
            <div className="max-w-2xl mt-6">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-brand-200 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide mb-5">
                Free Tool · Limited Companies
              </div>
              <h1 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4 leading-[1.1]">
                Corporation Tax Late Filing Penalty Calculator
              </h1>
              <p className="text-lg text-brand-200 leading-relaxed">
                A late limited company return means fines from two places at once: HMRC for the CT600 and Companies House for the annual accounts. This calculator shows both — plus your strike-off risk.
              </p>
            </div>
          </div>
        </section>

        <HomepageTrustBar />

        <div className="container-width py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* INPUTS */}
            <div className="space-y-5">

              <div className="bg-white border border-sand-mid/40 rounded-2xl p-6">
                <h2 className="font-display text-xl font-bold text-brand-900 mb-6">Your company's situation</h2>

                {/* Days late */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-bold text-brand-900">How many days late is the CT600?</label>
                    <span className="font-display text-xl font-bold text-brand-500">{daysLate} days</span>
                  </div>
                  <input
                    type="range" min={1} max={730} step={1} value={daysLate}
                    onChange={e => setDaysLate(Number(e.target.value))}
                    className="w-full accent-brand-500 mb-3"
                  />
                  <div className="flex justify-between text-xs text-taupe">
                    <span>1 day</span>
                    <span className="text-warn-text font-bold">6 months (10% charge)</span>
                    <span>2 years</span>
                  </div>
                  <div className="flex gap-2 flex-wrap mt-3">
                    {[
                      { label: '1 month', days: 30 },
                      { label: '3 months', days: 91 },
                      { label: '6 months', days: 183 },
                      { label: '12 months', days: 366 },
                    ].map(m => (
                      <button
                        key={m.days}
                        onClick={() => setDaysLate(m.days)}
                        className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all ${
                          daysLate === m.days
                            ? 'bg-brand-500 text-white border-brand-500'
                            : 'bg-cream border-sand-mid/60 text-taupe hover:border-brand-400'
                        }`}
                      >
                        {m.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* CT owed */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-bold text-brand-900">Estimated corporation tax owed</label>
                    <span className="font-display text-xl font-bold text-brand-500">{fmt(ctOwed)}</span>
                  </div>
                  <input
                    type="range" min={0} max={200000} step={1000} value={ctOwed}
                    onChange={e => setCtOwed(Number(e.target.value))}
                    className="w-full accent-brand-500 mb-2"
                  />
                  <div className="flex justify-between text-xs text-taupe">
                    <span>£0</span><span>£100,000</span><span>£200,000</span>
                  </div>
                </div>

                {/* Consecutive late toggle */}
                <div className="bg-cream border border-sand-mid/40 rounded-xl p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-bold text-brand-900 mb-1">Was the previous year's return also late?</p>
                      <p className="text-xs text-taupe leading-relaxed">If your company was late in the prior year, HMRC doubles the flat-rate penalties and Companies House also doubles its fines.</p>
                    </div>
                    <button
                      onClick={() => setConsecutive(!consecutive)}
                      className={`flex-shrink-0 w-12 h-6 rounded-full transition-colors relative ${consecutive ? 'bg-brand-500' : 'bg-sand-mid/60'}`}
                    >
                      <span className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-all ${consecutive ? 'left-7' : 'left-1'}`} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Strike-off risk */}
              {daysLate >= 300 && (
                <div className="bg-red-50 border border-red-200 rounded-2xl p-5 flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold text-red-700 mb-1">Strike-off risk is significant</p>
                    <p className="text-xs text-red-600 leading-relaxed">
                      At this stage, Companies House may have already issued a strike-off warning. If accounts are not filed before the strike-off takes effect, all company assets pass to the Crown and directors lose access to company funds. Act immediately.
                    </p>
                  </div>
                </div>
              )}

              <div className="flex items-start gap-2 text-xs text-taupe bg-cream border border-sand-mid/40 rounded-xl p-4">
                <Info className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                CT600 deadline is 12 months after the accounting period end. Companies House deadline for private companies is 9 months after period end — this calculator reflects the typical gap between the two. Interest rate 7.5% p.a. (March 2026).
              </div>
            </div>

            {/* RESULTS */}
            <div className="space-y-5">

              {/* Grand total */}
              <div className="bg-brand-900 rounded-2xl p-6 text-center">
                <p className="text-xs font-bold text-brand-300 uppercase tracking-widest mb-2">Total estimated exposure</p>
                <p className="font-display text-5xl font-bold text-white mb-1">{fmt(r.grandTotal)}</p>
                <p className="text-brand-300 text-sm">Across HMRC + Companies House + interest</p>
              </div>

              {/* Split: HMRC vs CH */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white border border-sand-mid/40 rounded-2xl p-5 text-center">
                  <p className="text-xs text-taupe mb-1">HMRC penalties</p>
                  <p className="font-display text-2xl font-bold text-orange-600">{fmt(r.hmrcTotal)}</p>
                  <p className="text-xs text-taupe mt-1">CT600 late filing</p>
                </div>
                <div className="bg-white border border-sand-mid/40 rounded-2xl p-5 text-center">
                  <p className="text-xs text-taupe mb-1">Companies House</p>
                  <p className="font-display text-2xl font-bold text-red-600">{fmt(r.chPenalty)}</p>
                  <p className="text-xs text-taupe mt-1">Late annual accounts{consecutive ? ' (doubled)' : ''}</p>
                </div>
              </div>

              {/* Full breakdown */}
              <div className="bg-white border border-sand-mid/40 rounded-2xl p-6">
                <p className="text-xs font-bold text-taupe uppercase tracking-widest mb-5">Full breakdown</p>

                {[
                  { label: `HMRC flat penalty${consecutive ? ' (doubled — consecutive year)' : ''}`, value: r.hmrcFlat, color: 'bg-amber-400' },
                  { label: 'HMRC percentage penalty (10% per 6-month threshold)', value: r.hmrcPct, color: 'bg-orange-500' },
                  { label: `Companies House fine${consecutive ? ' (doubled — consecutive year)' : ''}`, value: r.chPenalty, color: 'bg-red-500' },
                  { label: 'HMRC interest on unpaid corporation tax (7.5% p.a.)', value: r.interest, color: 'bg-brand-400' },
                ].filter(b => b.value > 0).map(b => (
                  <div key={b.label} className="mb-4">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-taupe pr-4 leading-snug">{b.label}</span>
                      <span className="font-bold text-brand-900 flex-shrink-0">{fmt(b.value)}</span>
                    </div>
                    <div className="h-2 bg-sand-light rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${b.color}`} style={{ width: pct(b.value) }} />
                    </div>
                  </div>
                ))}

                <div className="border-t border-sand-mid/40 pt-4 mt-2">
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: 'CT owed to HMRC', value: ctOwed },
                      { label: 'All penalties + interest', value: r.grandTotal },
                    ].map(c => (
                      <div key={c.label} className="bg-cream rounded-xl p-3">
                        <p className="text-xs text-taupe mb-0.5">{c.label}</p>
                        <p className="font-display text-lg font-bold text-brand-900">{fmt(c.value)}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-brand-900 rounded-xl p-3 mt-3">
                    <p className="text-xs text-brand-300 mb-0.5">Total including CT owed</p>
                    <p className="font-display text-2xl font-bold text-sand">{fmt(r.grandTotal + ctOwed)}</p>
                  </div>
                </div>
              </div>

              <button onClick={() => setIsModalOpen(true)} className="w-full btn-primary !py-4 justify-center !text-[15px]">
                Is Your Company at Risk? Get Free Assessment <ArrowRight className="w-4 h-4" />
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
                { href: '/tools/hmrc-penalty-calculator/', title: 'Self Assessment Penalty Calculator', desc: 'Exact HMRC fine + interest for personal late returns.' },
                { href: '/tools/appeal-deadline-checker/', title: 'Appeal Deadline Checker', desc: 'Is your 30-day appeal window still open?' },
                { href: '/tools/multi-year-estimator/', title: 'Multi-Year Exposure Estimator', desc: 'Total personal liability across multiple late years.' },
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
