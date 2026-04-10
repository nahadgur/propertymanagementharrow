'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LeadFormModal from '@/components/LeadFormModal'
import Link from 'next/link'

const GAS_URL = 'https://script.google.com/macros/s/AKfycbwFsGn1hEa134t4at3Qv_dVSUBrUI8DuS8STgtyw0Nvnr8sEONvut-CUyxCy_uH9Jt1/exec'

export default function ContactContent() {
  const [modalOpen, setModalOpen] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await fetch(GAS_URL, {
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
      <Header />
      <main className="flex-grow">

        {/* Hero */}
        <section style={{ background: 'var(--green-deep)' }} className="py-20">
          <div className="site-container">
            <nav className="flex items-center gap-2 mb-8" style={{ fontSize: 12 }}>
              <Link href="/" className="no-underline font-raleway" style={{ color: 'rgba(255,255,255,0.4)' }}>Home</Link>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>/</span>
              <span className="font-raleway" style={{ color: 'rgba(255,255,255,0.7)' }}>Contact</span>
            </nav>
            <h1 className="font-baskerville text-white mb-4" style={{ fontSize: 'clamp(28px, 4vw, 52px)', lineHeight: 1.1 }}>
              Get in touch.
            </h1>
            <p className="font-raleway" style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)' }}>
              We respond to all enquiries within 24 hours.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="section-pad" style={{ background: '#fff' }}>
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

              {/* Left — contact info */}
              <div>
                <h2 className="font-baskerville mb-8" style={{ fontSize: 22, color: 'var(--text)' }}>
                  Contact details
                </h2>

                <div className="flex flex-col gap-6">
                  <div>
                    <p className="font-raleway mb-1" style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-light)' }}>
                      Service Area
                    </p>
                    <p className="font-raleway" style={{ fontSize: 15, color: 'var(--text-muted)' }}>
                      London Borough of Harrow and surrounding HA postcodes
                    </p>
                  </div>
                  <div>
                    <p className="font-raleway mb-1" style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-light)' }}>
                      Response Time
                    </p>
                    <p className="font-raleway" style={{ fontSize: 15, color: 'var(--text-muted)' }}>
                      All enquiries acknowledged within 24 hours. Specialist introductions within 48 hours.
                    </p>
                  </div>
                  <div>
                    <p className="font-raleway mb-1" style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-light)' }}>
                      Service
                    </p>
                    <p className="font-raleway" style={{ fontSize: 15, color: 'var(--text-muted)' }}>
                      Free specialist matching for Harrow landlords. ARLA Propertymark vetted network.
                    </p>
                  </div>
                </div>

                {/* Specialist match CTA */}
                <div
                  className="mt-10 p-6"
                  style={{ background: 'var(--green-soft)', border: '1px solid var(--green-mid)' }}
                >
                  <h3 className="font-baskerville mb-2" style={{ fontSize: 19, color: 'var(--text)' }}>
                    Looking for a specialist match?
                  </h3>
                  <p className="font-raleway mb-5" style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.75 }}>
                    Use our full matching form for the fastest introduction to the right property management specialist in Harrow.
                  </p>
                  <button onClick={() => setModalOpen(true)} className="btn-primary">
                    Find My Specialist — Free
                  </button>
                </div>
              </div>

              {/* Right — message form */}
              <div>
                <h2 className="font-baskerville mb-8" style={{ fontSize: 22, color: 'var(--text)' }}>
                  Send a message
                </h2>

                {status === 'success' ? (
                  <div className="p-8" style={{ background: 'var(--green-soft)', border: '1px solid var(--green-mid)' }}>
                    <h3 className="font-baskerville mb-3" style={{ fontSize: 22, color: 'var(--text)' }}>
                      Message received
                    </h3>
                    <p className="font-raleway" style={{ fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.75 }}>
                      Thank you. We will be in touch within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="font-raleway" style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>
                        Full name
                      </label>
                      <input name="name" value={form.name} onChange={handleChange} required
                        placeholder="Your full name" className="pm-input" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="font-raleway" style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>
                        Email address
                      </label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} required
                        placeholder="you@example.com" className="pm-input" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="font-raleway" style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>
                        Phone <span style={{ fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>(optional)</span>
                      </label>
                      <input name="phone" value={form.phone} onChange={handleChange}
                        placeholder="07XXX XXX XXX" className="pm-input" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="font-raleway" style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>
                        Message
                      </label>
                      <textarea
                        name="message" value={form.message} onChange={handleChange} required
                        rows={5} placeholder="How can we help?"
                        className="pm-input resize-none"
                        style={{ resize: 'none' }}
                      />
                    </div>

                    {status === 'error' && (
                      <p className="font-raleway" style={{ fontSize: 13, color: '#c0392b' }}>
                        Something went wrong. Please try again or use the matching form above.
                      </p>
                    )}

                    <button type="submit" disabled={status === 'sending'} className="pm-btn mt-1">
                      {status === 'sending' ? 'Sending…' : 'Send Message'}
                    </button>
                    <p className="font-raleway" style={{ fontSize: 10, color: 'var(--text-light)' }}>
                      GDPR compliant · ICO registered
                    </p>
                  </form>
                )}
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
