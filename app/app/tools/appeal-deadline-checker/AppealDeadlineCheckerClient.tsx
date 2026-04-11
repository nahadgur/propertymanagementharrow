'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, AlertTriangle, XCircle, Calendar } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { HomepageTrustBar } from '@/components/HomepageTrustBar';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { siteConfig } from '@/data/site';

function daysBetween(a: Date, b: Date) {
  return Math.floor((b.getTime() - a.getTime()) / (1000 * 60 * 60 * 24));
}

function addDays(d: Date, n: number) {
  const r = new Date(d);
  r.setDate(r.getDate() + n);
  return r;
}

function fmtDate(d: Date) {
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

type Status = 'open' | 'open-late' | 'closed' | 'tribunal';

interface Result {
  status:      Status;
  daysElapsed: number;
  daysLeft:    number;
  deadline:    Date;
  heading:     string;
  body:        string;
  action:      string;
}

function analyse(noticeDate: Date, filedReturn: boolean, today: Date): Result {
  const deadline30 = addDays(noticeDate, 30);
  const deadline90 = addDays(noticeDate, 90); // late appeal window (HMRC discretion)
  const deadlineTribunal = addDays(noticeDate, 30 + 30); // rough tribunal window after internal review
  const elapsed = daysBetween(noticeDate, today);
  const daysLeft = daysBetween(today, deadline30);

  if (elapsed <= 30) {
    return {
      status: 'open', daysElapsed: elapsed, daysLeft,
      deadline: deadline30,
      heading: `Your 30-day appeal window is open — ${daysLeft} day${daysLeft !== 1 ? 's' : ''} left`,
      body: filedReturn
        ? 'Your return is filed and the appeal window is open. This is the strongest possible position — submit your appeal now while you have maximum time to prepare evidence.'
        : 'You need to file your return before HMRC will process your appeal. With the appeal window still open, act immediately: file first (even on estimates), then submit the appeal.',
      action: filedReturn ? 'Submit your appeal now' : 'File your return immediately, then appeal',
    };
  }

  if (elapsed <= 90) {
    return {
      status: 'open-late', daysElapsed: elapsed, daysLeft: 0,
      deadline: deadline90,
      heading: `Your standard 30-day window has closed — but a late appeal may still be accepted`,
      body: 'HMRC has discretion to accept appeals submitted after the 30-day window where there is a reasonable explanation for the delay in appealing. You will need to explain both why the original penalty was wrong AND why you were late in appealing. Success is less certain than within the window but it is not impossible.',
      action: 'Request a late appeal — explain delay and original grounds together',
    };
  }

  if (elapsed <= 180) {
    return {
      status: 'tribunal', daysElapsed: elapsed, daysLeft: 0,
      deadline: deadlineTribunal,
      heading: 'Standard HMRC appeal window closed — First-tier Tax Tribunal may still be available',
      body: 'At this stage, a direct HMRC appeal is unlikely to be accepted. However, you may still be able to appeal to the First-tier Tax Tribunal, which is an independent court. The Tribunal has its own time limits and discretion to hear late appeals where there are good grounds. This requires specialist representation.',
      action: 'Seek specialist advice about Tribunal appeal immediately',
    };
  }

  return {
    status: 'closed', daysElapsed: elapsed, daysLeft: 0,
    deadline: deadline30,
    heading: 'The standard appeal windows have passed',
    body: 'With over six months elapsed since the penalty notice, the realistic options for appealing this specific penalty have narrowed significantly. However, if you still have outstanding returns or newer penalty notices, those may have live appeal windows. A specialist can review your full position.',
    action: 'Get a full review of your outstanding penalties',
  };
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'HMRC Penalty Appeal Deadline Checker',
  url: `${siteConfig.url}/tools/appeal-deadline-checker/`,
  description: 'Check whether your 30-day HMRC penalty appeal window is still open — and what to do if it has already closed.',
  applicationCategory: 'FinanceApplication',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP' },
};

export default function AppealDeadlineCheckerClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [noticeDate, setNoticeDate] = useState('');
  const [filedReturn, setFiledReturn] = useState<boolean | null>(null);
  const [result, setResult] = useState<Result | null>(null);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  function check() {
    if (!noticeDate || filedReturn === null) return;
    const nd = new Date(noticeDate);
    nd.setHours(0, 0, 0, 0);
    if (isNaN(nd.getTime()) || nd > today) return;
    setResult(analyse(nd, filedReturn, today));
  }

  const statusConfig = {
    open:       { bg: 'bg-brand-50',  border: 'border-brand-200', icon: <CheckCircle className="w-6 h-6 text-brand-500" />, badge: 'bg-brand-500 text-white' },
    'open-late': { bg: 'bg-warn-bg',   border: 'border-warn-border', icon: <AlertTriangle className="w-6 h-6 text-warn-text" />, badge: 'bg-amber-500 text-white' },
    tribunal:   { bg: 'bg-orange-50', border: 'border-orange-200', icon: <AlertTriangle className="w-6 h-6 text-orange-500" />, badge: 'bg-orange-500 text-white' },
    closed:     { bg: 'bg-red-50',    border: 'border-red-200',    icon: <XCircle className="w-6 h-6 text-red-500" />,         badge: 'bg-red-500 text-white' },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main className="flex-grow">

        <section className="bg-brand-950 text-white py-12 md:py-16">
          <div className="container-width">
            <Breadcrumbs items={[{ label: 'Tools', href: '/tools/' }, { label: 'Appeal Deadline Checker' }]} />
            <div className="max-w-2xl mt-6">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-brand-200 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide mb-5">
                Free Tool · Instant Result
              </div>
              <h1 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4 leading-[1.1]">
                HMRC Penalty Appeal Deadline Checker
              </h1>
              <p className="text-lg text-brand-200 leading-relaxed">
                Enter the date on your HMRC penalty notice. We tell you whether the 30-day appeal window is still open, how many days you have left, and exactly what to do next.
              </p>
            </div>
          </div>
        </section>

        <HomepageTrustBar />

        <div className="container-width py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* INPUT FORM */}
            <div className="space-y-5">

              <div className="bg-white border border-sand-mid/40 rounded-2xl p-7">
                <h2 className="font-display text-xl font-bold text-brand-900 mb-6">Enter your penalty details</h2>

                {/* Date input */}
                <div className="mb-6">
                  <label className="block text-sm font-bold text-brand-900 mb-2">
                    Date on your HMRC penalty notice
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-taupe" />
                    <input
                      type="date"
                      value={noticeDate}
                      max={today.toISOString().split('T')[0]}
                      onChange={e => { setNoticeDate(e.target.value); setResult(null); }}
                      className="w-full pl-10 pr-4 py-3 border border-sand-mid/60 bg-cream rounded-xl text-brand-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                    />
                  </div>
                  <p className="text-xs text-taupe mt-2">This is printed at the top of your HMRC penalty notice letter.</p>
                </div>

                {/* Filed return? */}
                <div className="mb-7">
                  <label className="block text-sm font-bold text-brand-900 mb-3">
                    Have you already filed the outstanding return?
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { val: true,  label: 'Yes — return is filed' },
                      { val: false, label: 'No — still need to file' },
                    ].map(opt => (
                      <button
                        key={String(opt.val)}
                        onClick={() => { setFiledReturn(opt.val); setResult(null); }}
                        className={`py-3 px-4 rounded-xl border text-sm font-semibold transition-all ${
                          filedReturn === opt.val
                            ? 'bg-brand-500 text-white border-brand-500'
                            : 'bg-cream border-sand-mid/60 text-taupe hover:border-brand-400 hover:text-brand-900'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                  <p className="text-xs text-taupe mt-2">
                    HMRC will not process an appeal until the return is filed. If it isn't filed yet, we'll tell you what to do first.
                  </p>
                </div>

                <button
                  onClick={check}
                  disabled={!noticeDate || filedReturn === null}
                  className="w-full btn-primary !py-3.5 justify-center !text-[15px] disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Check My Appeal Window <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* How this works */}
              <div className="bg-cream border border-sand-mid/40 rounded-2xl p-6">
                <h3 className="font-bold text-brand-900 text-sm mb-4">How HMRC appeal deadlines work</h3>
                <div className="space-y-3">
                  {[
                    { days: '0–30 days', status: 'Standard window open', color: 'bg-brand-500' },
                    { days: '31–90 days', status: 'Late appeal — HMRC discretion', color: 'bg-amber-500' },
                    { days: '91–180 days', status: 'Tribunal may still be available', color: 'bg-orange-500' },
                    { days: '180+ days', status: 'Most routes closed', color: 'bg-red-500' },
                  ].map(r => (
                    <div key={r.days} className="flex items-center gap-3 text-sm">
                      <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${r.color}`} />
                      <span className="text-taupe w-28 flex-shrink-0">{r.days}</span>
                      <span className="text-brand-900 font-medium">{r.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RESULT */}
            <div>
              {!result ? (
                <div className="bg-cream border border-sand-mid/40 rounded-2xl p-10 text-center">
                  <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-brand-400" />
                  </div>
                  <p className="text-brand-900 font-bold mb-2">Enter your penalty notice date</p>
                  <p className="text-taupe text-sm">Your result will appear here instantly — no email required.</p>
                </div>
              ) : (
                <div className="space-y-5">
                  {/* Status card */}
                  <div className={`rounded-2xl border p-7 ${statusConfig[result.status].bg} ${statusConfig[result.status].border}`}>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-0.5">{statusConfig[result.status].icon}</div>
                      <div>
                        <h2 className="font-display text-xl font-bold text-brand-900 mb-3 leading-snug">
                          {result.heading}
                        </h2>
                        <p className="text-taupe text-[15px] leading-relaxed mb-4">{result.body}</p>
                        <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold ${statusConfig[result.status].badge}`}>
                          Next step: {result.action}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="bg-white border border-sand-mid/40 rounded-2xl p-6">
                    <p className="text-xs font-bold text-taupe uppercase tracking-widest mb-4">Your timeline</p>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-taupe">Penalty notice date</span>
                        <span className="font-bold text-brand-900">{fmtDate(new Date(noticeDate))}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-taupe">30-day standard deadline</span>
                        <span className="font-bold text-brand-900">{fmtDate(addDays(new Date(noticeDate), 30))}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-taupe">Today</span>
                        <span className="font-bold text-brand-900">{fmtDate(today)}</span>
                      </div>
                      <div className="flex justify-between text-sm border-t border-sand-mid/40 pt-3">
                        <span className="text-taupe">Days since notice</span>
                        <span className={`font-bold ${result.daysElapsed > 30 ? 'text-red-500' : 'text-brand-500'}`}>
                          {result.daysElapsed} days
                        </span>
                      </div>
                      {result.status === 'open' && (
                        <div className="flex justify-between text-sm">
                          <span className="text-taupe">Days remaining</span>
                          <span className="font-bold text-brand-500">{result.daysLeft} days</span>
                        </div>
                      )}
                    </div>

                    {/* Progress bar */}
                    {result.status === 'open' && (
                      <div className="mt-4">
                        <div className="h-2 bg-sand-light rounded-full overflow-hidden">
                          <div
                            className="h-full bg-brand-500 rounded-full transition-all"
                            style={{ width: `${Math.min((result.daysElapsed / 30) * 100, 100)}%` }}
                          />
                        </div>
                        <div className="flex justify-between text-xs text-taupe mt-1">
                          <span>Day 0</span>
                          <span className="text-warn-text font-semibold">Day 30 — deadline</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Return not filed warning */}
                  {!filedReturn && (
                    <div className="bg-warn-bg border border-warn-border rounded-xl p-5 flex items-start gap-3">
                      <AlertTriangle className="w-4 h-4 text-warn-text flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-bold text-warn-text mb-1">File the return before you appeal</p>
                        <p className="text-xs text-taupe leading-relaxed">
                          HMRC will not process your penalty appeal until the outstanding return is filed. File immediately — even on estimated figures — to preserve your appeal window and stop daily charges.
                        </p>
                      </div>
                    </div>
                  )}

                  <button onClick={() => setIsModalOpen(true)} className="w-full btn-primary !py-4 justify-center !text-[15px]">
                    Get Specialist Help With My Appeal <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-center text-xs text-taupe">
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Related tools */}
          <div className="mt-16 border-t border-sand-mid/40 pt-12">
            <p className="text-sm font-bold text-brand-900 mb-5">Other free tools</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { href: '/tools/hmrc-penalty-calculator/', title: 'Penalty + Interest Calculator', desc: 'Exact HMRC fine plus interest on any late return.' },
                { href: '/tools/multi-year-estimator/', title: 'Multi-Year Exposure Estimator', desc: 'Total liability across multiple late years.' },
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
