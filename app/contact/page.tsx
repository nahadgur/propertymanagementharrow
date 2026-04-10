'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LeadFormModal from '@/components/LeadFormModal'
import Link from 'next/link'
import { siteConfig } from '@/data/site'

const SCRIPT_URL = process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? ''

export default function ContactPage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await fetch(SCRIPT_URL, {
        method: 'POST', mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'Contact Page', timestamp: new Date().toISOString() }),
      })
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <LeadFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} location="Contact" />
      <Header onOpenModal={() => setModalOpen(true)} />
      <main className="flex-grow">
        <section style={{ background: 'var(--green-deep)' }} className="py-20">
          <div className="site-container">
            <nav className="flex items-center gap-2 text-[12px] mb-8" style={{ color: 'rgba(255,255,255,0.4)' }}>
              <Link href="/" className="no-underline" style={{ color: 'rgba(255,255,255,0.4)' }}>Home</Link>
              <span>/</span>
              <span style={{ color: 'rgba(255,255,255,0.7)' }}>Contact</span>
            </nav>
            <h1 className="font-display text-h1 text-white mb-4 leading-tight">Get in touch.</h1>
            <p className="font-sans text-[17px]" style={{ color: 'rgba(255,255,255,0.6)' }}>
              We respond to all enquiries within 24 hours.
            </p>
          </div>
        </section>

        <section className="section-pad bg-white">
          <div className="site-container grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact details */}
            <div>
              <h2 className="font-display text-h3 text-text mb-8">Contact details</h2>
              <div className="flex flex-col gap-6 font-sans text-[15px]">
                <div>
                  <p className="text-[11px] uppercase tracking-widest text-text-faint font-medium mb-1">Telephone</p>
                  <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="text-brand font-medium">{siteConfig.phone}</a>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-widest text-text-faint font-medium mb-1">Email</p>
                  <a href={`mailto:${siteConfig.email}`} className="text-brand font-medium">{siteConfig.email}</a>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-widest text-text-faint font-medium mb-1">Service area</p>
                  <p className="text-text-muted">London Borough of Harrow and surrounding HA postcodes</p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-widest text-text-faint font-medium mb-1">Response time</p>
                  <p className="text-text-muted">All enquiries acknowledged within 24 hours. Specialist introductions within 48 hours.</p>
                </div>
              </div>

              <div className="mt-10 p-6 border border-[#e0ece0]" style={{ background: 'var(--green-soft)' }}>
                <h3 className="font-display text-[20px] text-text mb-2">Looking for a specialist match?</h3>
                <p className="font-sans text-[13px] text-text-muted mb-5 leading-relaxed">
                  Use our full matching form for the fastest introduction to the right property tax specialist.
                </p>
                <button onClick={() => setModalOpen(true)} className="btn-primary text-[13px] py-3">
                  Find My Specialist — Free
                </button>
              </div>
            </div>

            {/* Message form */}
            <div>
              <h2 className="font-display text-h3 text-text mb-8">Send a message</h2>
              {status === 'success' ? (
                <div className="p-8 border border-[#e0ece0]" style={{ background: 'var(--green-soft)' }}>
                  <h3 className="font-display text-[22px] text-text mb-3">Message received</h3>
                  <p className="font-sans text-[15px] text-text-muted leading-relaxed">
                    Thank you. We will be in touch within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label className="field-label">Full name</label>
                    <input name="name" value={form.name} onChange={handleChange} required
                      placeholder="Your full name" className="field-input" />
                  </div>
                  <div>
                    <label className="field-label">Email address</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} required
                      placeholder="you@example.com" className="field-input" />
                  </div>
                  <div>
                    <label className="field-label">Phone (optional)</label>
                    <input name="phone" value={form.phone} onChange={handleChange}
                      placeholder="07XXX XXX XXX" className="field-input" />
                  </div>
                  <div>
                    <label className="field-label">Message</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required
                      rows={5} placeholder="How can we help?" className="field-input resize-none" />
                  </div>
                  {status === 'error' && (
                    <p className="text-[13px] text-red-600 font-sans">
                      Something went wrong. Please call us directly on {siteConfig.phone}.
                    </p>
                  )}
                  <button type="submit" disabled={status === 'sending'} className="btn-primary">
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                  <p className="font-sans text-[11px] text-text-faint">GDPR compliant &middot; ICO registered</p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
