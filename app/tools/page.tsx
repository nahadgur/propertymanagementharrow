'use client'
import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LeadFormModal from '@/components/LeadFormModal'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

const tools = [
  { title: 'Section 24 Calculator', desc: 'Enter your rental income and mortgage interest to see exactly how much the finance cost restriction is costing you each year — and over 5 and 10 year horizons.', href: '/tools/section-24-calculator/', pill: 'Most used' },
  { title: 'SPV vs Personal Tax Calculator', desc: 'Compare the annual tax position of holding your portfolio personally against an SPV limited company. Includes a breakeven analysis on the cost of transfer.', href: '/tools/spv-vs-personal-tax-calculator/', pill: 'Portfolio investors' },
  { title: 'UK Property CGT Calculator', desc: 'Estimate your Capital Gains Tax on a residential property disposal. Includes Private Residence Relief, lettings relief, and the 2024/25 Annual Exempt Amount.', href: '/tools/capital-gains-tax-calculator-uk/', pill: 'Selling a property' },
]

export default function ToolsPage() {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <>
      <LeadFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} location="Tools Index" />
      <Header onOpenModal={() => setModalOpen(true)} />
      <main className="flex-grow">
        <section style={{ background: 'var(--green-deep)' }} className="py-20">
          <div className="site-container">
            <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Free Tools' }]} />
            <p className="eyebrow mb-4" style={{ color: 'rgba(255,255,255,0.45)' }}>Free Interactive Tools</p>
            <h1 className="font-display text-[2.2rem] md:text-[2.8rem] lg:text-[3.5rem] text-white mb-6 leading-tight">Property tax calculators for UK landlords.</h1>
            <p className="font-sans text-[17px] max-w-xl" style={{ color: 'rgba(255,255,255,0.6)' }}>Understand your tax position before speaking to a specialist. All tools are free, fully interactive, and built for UK landlords and property investors.</p>
          </div>
        </section>
        <section className="section-pad bg-white">
          <div className="site-container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tools.map(tool => (
                <div key={tool.href} className="flex flex-col border border-[#f0eee8] p-8">
                  <span className="inline-block font-sans text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 mb-4 self-start" style={{ background: 'var(--green-light)', color: 'var(--green-dark)' }}>{tool.pill}</span>
                  <h2 className="font-display text-[22px] text-text mb-3 leading-snug">{tool.title}</h2>
                  <p className="font-sans text-[14px] text-text-muted leading-relaxed flex-grow mb-6">{tool.desc}</p>
                  <Link href={tool.href} className="btn-primary self-start text-[13px] py-3">Use calculator &rarr;</Link>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 border-t border-[#f0eee8]" style={{ background: 'var(--green-soft)' }}>
          <div className="site-container text-center">
            <h2 className="font-display text-h2 text-text mb-4 leading-tight">Know your number. Then get the strategy.</h2>
            <p className="font-sans text-[16px] text-text-muted mb-8 max-w-lg mx-auto">These tools give you the direction. A specialist gives you the action plan — free, within 48 hours.</p>
            <button onClick={() => setModalOpen(true)} className="btn-primary">Find My Specialist — Free</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
