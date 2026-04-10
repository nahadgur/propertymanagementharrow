import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description:
    'Terms of Use for Property Accountants Harrow — the rules governing use of our website and specialist matching service.',
  alternates: { canonical: 'https://www.propertyaccountantsharrow.co.uk/terms/' },
}

const sections = [
  {
    title: 'Nature of the service',
    body: 'Property Accountants Harrow is a specialist matching and introduction service. We connect property investors with ACCA and ICAEW certified accountants who specialise in property tax. We do not provide accountancy, tax, legal or financial advice ourselves, and no content on this website constitutes professional advice. Always seek advice from a qualified professional regarding your specific circumstances before taking any action in relation to your property or tax affairs.',
  },
  {
    title: 'Eligibility',
    body: 'Our matching service is available to individuals and entities located in the United Kingdom who own or are considering acquiring residential or commercial property. By submitting an enquiry, you confirm that the information you provide is accurate and that you are requesting an introduction for a genuine advisory need.',
  },
  {
    title: 'The matching service',
    body: 'The matching service is provided free of charge to property investors and landlords. By submitting an enquiry, you authorise us to share your name, contact details, and portfolio information with a suitably matched specialist from our network for the purpose of arranging a professional introduction. We do not guarantee that any specialist will accept you as a client, or that any particular outcome will result from an introduction.',
  },
  {
    title: 'Nature of the specialist relationship',
    body: 'Specialists in our network are independent, self-employed or firm-based professionals. They are not employees, contractors or agents of Property Accountants Harrow. We are not responsible for the advice given, fees charged, work performed, or any outcome arising from an engagement between you and a specialist following an introduction. Any engagement is governed solely by the agreement between you and the specialist.',
  },
  {
    title: 'Accuracy of website content',
    body: 'We take reasonable care to ensure that information on this website is accurate and up to date. However, property tax legislation changes frequently and without notice. Nothing on this website should be relied upon as current professional advice. Tax rates, reliefs, thresholds and rules cited on this site may have changed since publication. Always verify the current position with a qualified property tax adviser.',
  },
  {
    title: 'Intellectual property',
    body: 'All content on this website — including text, design, tools, calculators, copy, and structural elements — is the intellectual property of Property Accountants Harrow or its licensors. You may not reproduce, republish, distribute, adapt or commercially exploit any content from this site without our prior written consent. Linking to our website for non-commercial purposes is permitted.',
  },
  {
    title: 'Limitation of liability',
    body: 'To the fullest extent permitted by applicable law, Property Accountants Harrow excludes all liability for any loss or damage — including direct, indirect, incidental, or consequential loss — arising from your use of this website, reliance on its content, or any introduction made through our matching service. This limitation does not affect any liability that cannot lawfully be excluded, including liability for death or personal injury caused by our negligence.',
  },
  {
    title: 'Third-party links',
    body: 'Our website may contain links to third-party websites, including the websites of specialists in our network. We are not responsible for the content, privacy practices or accuracy of information on any third-party site. The inclusion of a link does not constitute our endorsement of that site or its operator.',
  },
  {
    title: 'Amendments',
    body: 'We reserve the right to amend these terms at any time. The date at the top of this page indicates when the terms were last revised. Continued use of this website following any amendment constitutes your acceptance of the revised terms. If you do not agree with the revised terms, you should stop using the website.',
  },
  {
    title: 'Governing law and jurisdiction',
    body: 'These terms of use are governed by the laws of England and Wales. Any dispute arising from your use of this website or our services shall be subject to the exclusive jurisdiction of the courts of England and Wales.',
  },
]

export default function TermsPage() {
  return (
    <main className="flex-grow bg-white">
      {/* Hero */}
      <section style={{ background: 'var(--green-deep)' }} className="py-20">
        <div className="site-container max-w-3xl">
          <nav className="flex items-center gap-2 text-[12px] mb-8" style={{ color: 'rgba(255,255,255,0.4)' }}>
            <Link href="/" className="no-underline" style={{ color: 'rgba(255,255,255,0.4)' }}>Home</Link>
            <span>/</span>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>Terms of Use</span>
          </nav>
          <h1 className="font-display text-h1 text-white mb-4 leading-tight">Terms of Use</h1>
          <p className="font-sans text-[14px]" style={{ color: 'rgba(255,255,255,0.45)' }}>
            Last updated: January 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-pad">
        <div className="site-container max-w-3xl">
          {/* Intro */}
          <p className="font-sans text-[16px] text-text-muted leading-relaxed mb-14 pb-10 border-b border-[#f0eee8]">
            These terms govern your use of the Property Accountants Harrow website and specialist matching service. By using our website or submitting an enquiry, you agree to these terms. Please read them carefully before proceeding.
          </p>

          <div className="flex flex-col gap-0">
            {sections.map((s, i) => (
              <div
                key={s.title}
                className={`grid grid-cols-[200px_1fr] gap-16 py-10 ${i > 0 ? 'border-t border-[#f0eee8]' : ''}`}
              >
                <h2 className="font-display text-[17px] text-text leading-snug pt-1">{s.title}</h2>
                <p className="font-sans text-[15px] text-text-muted leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div className="mt-14 pt-10 border-t border-[#f0eee8] flex flex-col gap-3">
            <p className="font-sans text-[13px] text-text-faint leading-relaxed">
              Property Accountants Harrow is registered in England and Wales.
            </p>
            <p className="font-sans text-[13px] text-text-faint leading-relaxed">
              Questions about these terms:{' '}
              <a href="mailto:hello@propertyaccountantsharrow.co.uk" className="text-brand">
                hello@propertyaccountantsharrow.co.uk
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
