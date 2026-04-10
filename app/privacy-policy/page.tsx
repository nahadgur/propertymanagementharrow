import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for Property Accountants Harrow — how we collect, use and protect your personal data in compliance with UK GDPR.',
  alternates: { canonical: 'https://www.propertyaccountantsharrow.co.uk/privacy-policy/' },
}

const sections = [
  {
    title: 'Who we are',
    body: 'Property Accountants Harrow is a specialist matching service registered in England and Wales. We are registered with the Information Commissioner\'s Office (ICO) and operate in compliance with UK GDPR and the Data Protection Act 2018. References to "we", "us", and "our" in this policy refer to Property Accountants Harrow. Our email address is hello@propertyaccountantsharrow.co.uk.',
  },
  {
    title: 'What personal data we collect',
    body: 'When you submit an enquiry through our website, we collect your name, email address, telephone number, and information about your property portfolio — including size, type, location, and primary tax concern. If you contact us by telephone or email directly, we retain a record of that communication. We do not collect sensitive personal data (as defined under UK GDPR) and do not require you to provide it.',
  },
  {
    title: 'Why we collect your data and our legal basis',
    body: 'We collect your information solely to assess your enquiry and introduce you to a suitably matched property tax specialist from our vetted Harrow network. Our legal basis for processing is legitimate interests — specifically, providing the matching service you have requested by contacting us. We do not use your data for marketing purposes without your explicit consent. We do not sell, rent, or share your personal data with any third party other than your matched specialist.',
  },
  {
    title: 'How we share your data',
    body: 'Your contact details and portfolio information are shared with the single specialist we identify as the right match for your situation. That specialist operates under their own professional and data protection obligations. We do not circulate your information to multiple specialists simultaneously, and we do not share your data with advertising networks, data brokers, or any other commercial third parties.',
  },
  {
    title: 'How long we keep your data',
    body: 'Enquiry data is retained for a maximum of 12 months from the date of submission. After this period, records are securely deleted unless an ongoing relationship, compliance requirement, or legal obligation requires otherwise. You may request earlier deletion at any time by contacting us at hello@propertyaccountantsharrow.co.uk.',
  },
  {
    title: 'Your rights under UK GDPR',
    body: 'You have the right to: access the personal data we hold about you; request correction of inaccurate data; request deletion of your data (the "right to be forgotten"); object to processing based on legitimate interests; request restriction of processing; and request data portability. To exercise any of these rights, contact us at hello@propertyaccountantsharrow.co.uk. We will respond within one calendar month.',
  },
  {
    title: 'Cookies and website analytics',
    body: 'Our website uses essential cookies required for basic functionality. We may use analytics cookies (such as Google Analytics) with your consent to understand how visitors use our site. Analytics cookies do not transmit personally identifiable information. You can manage cookie preferences through your browser settings or via the cookie consent banner on your first visit.',
  },
  {
    title: 'Data security',
    body: 'We take appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. Enquiry data is stored securely and access is limited to those who need it to provide the matching service.',
  },
  {
    title: 'Changes to this policy',
    body: 'We may update this privacy policy from time to time to reflect changes in our practices or applicable law. The date at the top of this page indicates when the policy was last revised. We encourage you to review this policy periodically.',
  },
  {
    title: 'Complaints',
    body: 'If you are unsatisfied with how we have handled your personal data, you have the right to lodge a complaint with the Information Commissioner\'s Office. You can do so at ico.org.uk or by calling 0303 123 1113. We would, however, welcome the opportunity to address your concern directly before you contact the ICO — please email us at hello@propertyaccountantsharrow.co.uk.',
  },
]

export default function PrivacyPolicyPage() {
  return (
    <main className="flex-grow bg-white">
      {/* Hero */}
      <section style={{ background: 'var(--green-deep)' }} className="py-20">
        <div className="site-container max-w-3xl">
          <nav className="flex items-center gap-2 text-[12px] mb-8" style={{ color: 'rgba(255,255,255,0.4)' }}>
            <Link href="/" className="no-underline" style={{ color: 'rgba(255,255,255,0.4)' }}>Home</Link>
            <span>/</span>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>Privacy Policy</span>
          </nav>
          <h1 className="font-display text-h1 text-white mb-4 leading-tight">Privacy Policy</h1>
          <p className="font-sans text-[14px]" style={{ color: 'rgba(255,255,255,0.45)' }}>
            Last updated: January 2025 &middot; ICO registered
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-pad">
        <div className="site-container max-w-3xl">
          {/* Intro */}
          <p className="font-sans text-[16px] text-text-muted leading-relaxed mb-14 pb-10 border-b border-[#f0eee8]">
            This policy explains how Property Accountants Harrow collects, uses, stores and protects the personal data you provide when using our website and matching service. We are committed to handling your data responsibly and in compliance with UK GDPR.
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
          <div className="mt-14 pt-10 border-t border-[#f0eee8]">
            <p className="font-sans text-[13px] text-text-faint leading-relaxed">
              Property Accountants Harrow is registered in England and Wales. ICO registration number available on request.
              For all data protection queries: <a href="mailto:hello@propertyaccountantsharrow.co.uk"
                className="text-brand">hello@propertyaccountantsharrow.co.uk</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
