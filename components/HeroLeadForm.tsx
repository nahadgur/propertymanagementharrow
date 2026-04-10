'use client'

import { useState } from 'react'

interface HeroLeadFormProps {
  service?:  string
  location?: string
}

const SCRIPT_URL = process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? ''

export default function HeroLeadForm({ service, location }: HeroLeadFormProps) {
  const [form, setForm] = useState({
    name:      '',
    email:     '',
    phone:     '',
    portfolio: '',
    concern:   service ?? '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: location ?? 'Hero Form', timestamp: new Date().toISOString() }),
      })
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="flex flex-col" style={{ background: 'var(--green-deep)' }}>

      {/* ── TOP: Hero image ───────────────────────────── */}
      <div className="relative overflow-hidden" style={{ minHeight: '340px', flex: '1' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-main.png"
          alt="Harrow property — property tax specialists"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        {/* subtle gradient at bottom to blend into form */}
        <div className="absolute bottom-0 left-0 right-0 h-24"
          style={{ background: 'linear-gradient(to bottom, transparent, var(--green-deep))' }} />
      </div>

      {/* ── BOTTOM: Lead form ─────────────────────────── */}
      <div className="p-6 md:p-8" style={{ background: 'var(--green-deep)' }}>
        {/* Accent line */}
        <div style={{ height: 2, background: 'var(--green)', marginBottom: '1.25rem' }} />

        {status === 'success' ? (
          <div className="text-center py-6">
            <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3"
              style={{ background: 'rgba(39,118,73,0.25)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4caf7d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 className="font-display text-xl text-white mb-2">Enquiry received</h3>
            <p className="font-sans text-[13px] text-white/55 leading-relaxed">
              We will introduce you to a matched specialist within 48 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-0">
            <h3 className="font-display text-[20px] text-white leading-tight mb-1">
              Find Your Specialist
            </h3>
            <p className="font-sans text-[11px] text-white/45 mb-5 leading-relaxed">
              Free matching &middot; No obligation &middot; 48-hour response
            </p>

            <div className="grid grid-cols-2 gap-2 mb-2">
              <input name="name" value={form.name} onChange={handleChange} required
                placeholder="First name" className="field-input-dark" />
              <input name="phone" value={form.phone} onChange={handleChange} required
                placeholder="Phone" className="field-input-dark" />
            </div>

            <input name="email" type="email" value={form.email} onChange={handleChange} required
              placeholder="Email address" className="field-input-dark mb-2" />

            <select name="portfolio" value={form.portfolio} onChange={handleChange} required
              className="field-input-dark mb-2"
              style={{ color: form.portfolio ? 'white' : 'rgba(255,255,255,0.3)' }}>
              <option value="">Portfolio size...</option>
              <option>1&ndash;2 properties</option>
              <option>3&ndash;5 properties</option>
              <option>6&ndash;10 properties</option>
              <option>10+ properties</option>
            </select>

            <select name="concern" value={form.concern} onChange={handleChange} required
              className="field-input-dark mb-4"
              style={{ color: form.concern ? 'white' : 'rgba(255,255,255,0.3)' }}>
              <option value="">Primary concern...</option>
              <option>Section 24 Mitigation</option>
              <option>SPV Incorporation</option>
              <option>Capital Gains Tax</option>
              <option>Inheritance Tax</option>
              <option>SDLT Planning</option>
              <option>General tax review</option>
            </select>

            {status === 'error' && (
              <p className="text-[12px] text-red-400 font-sans mb-3">
                Something went wrong. Please call us directly.
              </p>
            )}

            <button type="submit" disabled={status === 'sending'}
              className="w-full font-sans font-bold text-[13px] tracking-wide py-3.5 border-0 cursor-pointer transition-colors duration-200"
              style={{ background: 'var(--green)', color: 'white' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--green-dark)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--green)')}>
              {status === 'sending' ? 'Sending...' : 'Match Me With a Specialist \u2192'}
            </button>

            <p className="font-sans text-[10px] text-white/30 text-center mt-2.5 leading-relaxed">
              Free service &middot; GDPR compliant &middot; No obligation
            </p>
          </form>
        )}
      </div>
    </div>
  )
}
