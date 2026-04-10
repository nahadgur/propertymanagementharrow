'use client'

import { useState, useEffect } from 'react'

interface LeadFormModalProps {
  isOpen:    boolean
  onClose:   () => void
  service?:  string
  location?: string
}

const SCRIPT_URL = process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? ''

export default function LeadFormModal({ isOpen, onClose, service, location }: LeadFormModalProps) {
  const [form, setForm] = useState({
    name:      '',
    email:     '',
    phone:     '',
    portfolio: '',
    concern:   service ?? '',
    message:   '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Reset on open
  useEffect(() => {
    if (isOpen) {
      setStatus('idle')
      setForm(f => ({ ...f, concern: service ?? '' }))
    }
  }, [isOpen, service])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
        body: JSON.stringify({ ...form, source: location ?? 'Homepage', timestamp: new Date().toISOString() }),
      })
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      style={{ background: 'rgba(10,26,14,0.85)', backdropFilter: 'blur(4px)' }}
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="bg-white w-full max-w-xl max-h-[90vh] overflow-y-auto relative">
        {/* Green top strip */}
        <div style={{ height: 3, background: 'var(--green)' }} />

        {/* Header */}
        <div className="px-8 pt-8 pb-6 border-b border-[#f0eee8] flex justify-between items-start">
          <div>
            <h2 className="font-display text-2xl text-text leading-tight mb-1">
              Find Your Specialist
            </h2>
            <p className="font-sans text-[13px] text-text-faint">
              Free matching &middot; No obligation &middot; 48-hour introduction guarantee
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-text-faint hover:text-text transition-colors font-sans text-[20px] leading-none ml-4 flex-shrink-0 cursor-pointer bg-transparent border-0 p-1"
            aria-label="Close"
          >
            &times;
          </button>
        </div>

        {status === 'success' ? (
          <div className="px-8 py-12 text-center">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ background: 'var(--green-light)' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#277649" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 className="font-display text-xl text-text mb-3">Enquiry received</h3>
            <p className="font-sans text-[14px] text-text-muted leading-relaxed max-w-sm mx-auto">
              Thank you. We will review your portfolio details and introduce you to a matched specialist within 48 hours.
            </p>
            <button onClick={onClose} className="btn-primary mt-8 px-8">Close</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-8 py-8 flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="field-label">First name</label>
                <input name="name" value={form.name} onChange={handleChange} required
                  placeholder="e.g. Sarah" className="field-input" />
              </div>
              <div>
                <label className="field-label">Phone</label>
                <input name="phone" value={form.phone} onChange={handleChange} required
                  placeholder="07XXX XXX XXX" className="field-input" />
              </div>
            </div>

            <div>
              <label className="field-label">Email address</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} required
                placeholder="sarah@example.com" className="field-input" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="field-label">Portfolio size</label>
                <select name="portfolio" value={form.portfolio} onChange={handleChange} required className="field-input">
                  <option value="">Select...</option>
                  <option>1&ndash;2 properties</option>
                  <option>3&ndash;5 properties</option>
                  <option>6&ndash;10 properties</option>
                  <option>10+ properties</option>
                </select>
              </div>
              <div>
                <label className="field-label">Primary concern</label>
                <select name="concern" value={form.concern} onChange={handleChange} required className="field-input">
                  <option value="">Select...</option>
                  <option>Section 24 Mitigation</option>
                  <option>SPV Incorporation</option>
                  <option>Capital Gains Tax</option>
                  <option>Inheritance Tax</option>
                  <option>SDLT Planning</option>
                  <option>General tax review</option>
                </select>
              </div>
            </div>

            <div>
              <label className="field-label">Tell us about your situation (optional)</label>
              <textarea name="message" value={form.message} onChange={handleChange} rows={3}
                placeholder="Any relevant context — portfolio location, mortgage levels, timeline..."
                className="field-input resize-none" />
            </div>

            {status === 'error' && (
              <p className="text-[13px] text-red-600 font-sans">
                Something went wrong. Please call us directly on {' '}
                <a href="tel:02080503880" className="underline">0208 050 3880</a>.
              </p>
            )}

            <button type="submit" disabled={status === 'sending'} className="btn-primary w-full py-4 text-[13px]">
              {status === 'sending' ? 'Sending...' : 'Match Me With a Specialist'}
            </button>

            <p className="text-[11px] text-text-faint text-center leading-relaxed font-sans">
              Free service &middot; GDPR compliant &middot; ICO registered &middot; No obligation
            </p>
          </form>
        )}
      </div>
    </div>
  )
}
