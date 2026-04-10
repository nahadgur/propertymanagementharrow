'use client'

import { useState } from 'react'

const SERVICES = [
  'Residential lettings',
  'HMO management',
  'Block management',
  'Rent collection only',
  'Tenant find only',
]

const STATS = [
  { n: '850+', label: 'Properties managed' },
  { n: '98%',  label: 'Occupancy rate' },
  { n: '14yr', label: 'In Harrow' },
]

const BADGES = [
  'ARLA Registered',
  '850+ Properties',
  '14 Years Local',
  '5-Star Rated',
  'No Hidden Fees',
]

const GAS_URL = 'https://script.google.com/macros/s/AKfycbwFsGn1hEa134t4at3Qv_dVSUBrUI8DuS8STgtyw0Nvnr8sEONvut-CUyxCy_uH9Jt1/exec'

export default function HeroHome() {
  const [form, setForm] = useState({ name: '', phone: '', postcode: '', service: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      await fetch(GAS_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'Homepage Hero', submitted_at: new Date().toISOString() }),
      })
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section>
      {/* ── Full-width image banner ── */}
      <div
        className="relative overflow-hidden flex items-end"
        style={{ height: 'clamp(190px, 28vw, 280px)' }}
      >
        {/* Photo */}
        <img
          src="/images/hero-main.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(26,46,31,0.94) 0%, rgba(26,46,31,0.75) 45%, rgba(26,46,31,0.25) 100%)',
          }}
        />
        {/* Text */}
        <div className="relative z-10 px-7 md:px-10 pb-8 pt-10 max-w-[680px]">
          <p
            className="text-[10px] font-raleway font-bold uppercase tracking-[.18em] mb-3"
            style={{ color: 'rgba(255,255,255,0.5)' }}
          >
            Full-Service Property Management · London Borough of Harrow
          </p>
          <h1
            className="font-baskerville text-[clamp(26px,4vw,44px)] leading-[1.08] text-white"
          >
            Your property, our{' '}
            <em className="font-baskerville italic" style={{ color: 'var(--green-mid)' }}>
              expertise.
            </em>
            <br />
            Your peace of mind.
          </h1>
        </div>

        {/* Stat strip — bottom right of banner */}
        <div
          className="absolute bottom-0 right-0 hidden md:flex items-stretch"
          style={{ background: 'rgba(26,46,31,0.85)' }}
        >
          {STATS.map((s, i) => (
            <div
              key={s.n}
              className="flex flex-col items-center justify-center px-6 py-3 text-white"
              style={{ borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.12)' : 'none' }}
            >
              <span className="font-raleway font-800 text-[22px] leading-none">{s.n}</span>
              <span className="font-raleway text-[10px] mt-1" style={{ color: 'rgba(255,255,255,0.55)' }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Split: description left + form right ── */}
      <div
        className="grid grid-cols-1 md:grid-cols-[1fr_380px]"
        style={{ background: '#fff', borderTop: '1px solid var(--border)' }}
      >
        {/* LEFT — description + badges */}
        <div
          className="px-7 md:px-10 py-8 flex flex-col justify-center"
          style={{ borderBottom: '1px solid var(--border)' }}
        >
          <p
            className="font-raleway font-400 text-[14px] leading-[1.8] mb-6"
            style={{ color: 'var(--text-muted)', maxWidth: 480 }}
          >
            Residential lettings, HMO management and block management across Harrow.
            Transparent fees, no surprises. One team handles everything from tenant
            find to maintenance — so you can get on with your life.
          </p>
          {/* Trust badges */}
          <div className="flex flex-wrap gap-2">
            {BADGES.map(b => (
              <span
                key={b}
                className="font-raleway font-700 text-[11px] px-3 py-1.5 rounded-full"
                style={{ background: 'var(--green-soft)', color: 'var(--green)', letterSpacing: '.04em' }}
              >
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT — Lead form */}
        <div
          className="px-6 py-8"
          style={{ borderLeft: '1px solid var(--border)', background: 'var(--cream)' }}
        >
          {status === 'done' ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-3 py-8">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ background: 'var(--green-soft)' }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2.5" strokeLinecap="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <p className="font-baskerville text-[20px]" style={{ color: 'var(--text)' }}>Thank you</p>
              <p className="font-raleway text-[13px]" style={{ color: 'var(--text-muted)' }}>
                We'll be in touch within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div>
                <p className="font-baskerville text-[19px] leading-snug mb-1" style={{ color: 'var(--text)' }}>
                  Get a free quote
                </p>
                <p
                  className="font-raleway font-700 text-[11px] tracking-[.04em] mb-3"
                  style={{ color: 'var(--green)' }}
                >
                  24hr response · No obligation
                </p>
              </div>
              <input
                className="pm-input"
                placeholder="Your full name"
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                required
              />
              <input
                className="pm-input"
                type="tel"
                placeholder="Phone number"
                value={form.phone}
                onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                required
              />
              <input
                className="pm-input"
                placeholder="Property postcode"
                value={form.postcode}
                onChange={e => setForm(f => ({ ...f, postcode: e.target.value }))}
                required
              />
              <select
                className="pm-select"
                value={form.service}
                onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
                required
              >
                <option value="">Service needed...</option>
                {SERVICES.map(s => (
                  <option key={s}>{s}</option>
                ))}
              </select>
              <button type="submit" className="pm-btn" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Get My Free Quote'}
              </button>
              <p className="font-raleway text-[10px] text-center" style={{ color: 'var(--text-light)' }}>
                Free · No obligation · ARLA registered
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
