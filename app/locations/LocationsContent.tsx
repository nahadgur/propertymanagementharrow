'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LeadFormModal from '@/components/LeadFormModal'
import Breadcrumbs from '@/components/Breadcrumbs'

// Areas with dedicated spoke pages
const SPOKE_PAGES: Record<string, string> = {
  'stanmore':           '/harrow/stanmore/',
  'pinner':             '/harrow/pinner/',
  'wealdstone':         '/harrow/wealdstone/',
  'harrow-on-the-hill': '/harrow/harrow-on-the-hill/',
  'harrow-town-centre': '/harrow/harrow-town-centre/',
  'edgware':            '/harrow/edgware/',
  'north-harrow':       '/harrow/north-harrow/',
  'south-harrow':       '/harrow/south-harrow/',
  'kenton':             '/harrow/kenton/',
  'rayners-lane':       '/harrow/rayners-lane/',
  'hatch-end':          '/harrow/hatch-end/',
  'canons-park':        '/harrow/canons-park/',
  'queensbury':         '/harrow/queensbury/',
  'west-harrow':        '/harrow/west-harrow/',
  'headstone':          '/harrow/headstone/',
  'ruislip':            '/harrow/ruislip/',
  'northwood':          '/harrow/northwood/',
  'pinner-green':       '/harrow/pinner-green/',
  'north-wembley':      '/harrow/north-wembley/',
  'burnt-oak':          '/harrow/burnt-oak/',
  'eastcote':           '/harrow/eastcote/',
}

function toSlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

const LOCATIONS: { region: string; postcode: string; areas: string[] }[] = [
  {
    region: 'Central Harrow',
    postcode: 'HA1, HA3',
    areas: ['Harrow on the Hill', 'Harrow Town Centre', 'Greenhill', 'Roxeth', 'College Road', 'St Anns Road', 'Wealdstone', 'Kenton Road'],
  },
  {
    region: 'North Harrow & Pinner',
    postcode: 'HA2, HA5',
    areas: ['North Harrow', 'Pinner', 'Hatch End', 'Eastcote', 'Pinner Green', 'Rayners Lane', 'West Harrow', 'Headstone'],
  },
  {
    region: 'South Harrow & Rayners Lane',
    postcode: 'HA2',
    areas: ['South Harrow', 'Rayners Lane', 'Alexandra Avenue', 'Northolt', 'Sudbury', 'Roxbourne', 'Yeading', 'Grange Park'],
  },
  {
    region: 'Stanmore & Edgware',
    postcode: 'HA7, HA8',
    areas: ['Stanmore', 'Edgware', 'Canons Park', 'Queensbury', 'Little Stanmore', 'Belmont', 'Burnt Oak', 'Mill Hill'],
  },
  {
    region: 'Kenton & Preston',
    postcode: 'HA3, HA9',
    areas: ['Kenton', 'Preston', 'Wembley', 'Kingsbury', 'Fryent', 'Barn Hill', 'North Wembley', 'South Kenton'],
  },
  {
    region: 'Surrounding Areas',
    postcode: 'UB, WD',
    areas: ['Ruislip', 'Ruislip Manor', 'Ickenham', 'Hillingdon', 'Uxbridge', 'Northwood', 'Carpenders Park', 'Bushey'],
  },
]

export default function LocationsContent() {
  const [modalOpen, setModalOpen] = useState(false)
  const [search, setSearch] = useState('')

  const filtered = LOCATIONS.map(group => ({
    ...group,
    areas: group.areas.filter(a =>
      a.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter(g => g.areas.length > 0)

  const totalAreas = LOCATIONS.reduce((n, g) => n + g.areas.length, 0)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Property Tax Accountants — All Harrow Locations',
        description: 'Find a property tax accountant specialist serving your area. We cover all Harrow postcodes — HA1 through HA9 — and surrounding areas including Ruislip, Uxbridge, and Bushey.',
        url: 'https://www.propertyaccountantsharrow.co.uk/locations/',
      }) }} />
      <LeadFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} location="Locations Page" />
      <Header onOpenModal={() => setModalOpen(true)} />

      <main className="flex-grow">

        {/* Hero — full bleed */}
        <section className="relative py-20 overflow-hidden" style={{ background: 'var(--green-deep)' }}>
          <img
            src="/images/hero-services.png"
            alt="Harrow property areas"
            className="absolute inset-0 w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(15,51,32,0.88) 0%, rgba(15,51,32,0.6) 100%)' }} />
          <div className="site-container relative z-10">
            <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'All Locations' }]} />
            <p className="eyebrow mb-4" style={{ color: 'rgba(255,255,255,0.45)' }}>
              {totalAreas} Areas Covered
            </p>
            <h1 className="font-display text-[2.2rem] md:text-[2.8rem] lg:text-[3.5rem] text-white mb-6 leading-tight max-w-2xl">
              Property Tax Accountants Across All Harrow Postcodes
            </h1>
            <p className="font-sans text-[16px] md:text-[17px] max-w-xl leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.6)' }}>
              We match landlords and property investors across every HA postcode — and surrounding areas — with ACCA and ICAEW certified property tax specialists.
            </p>
            {/* Search */}
            <div className="max-w-md">
              <input
                type="text"
                placeholder="Search your area e.g. Pinner, Wealdstone..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full font-sans text-[14px] px-5 py-4 border-0 outline-none text-text"
                style={{ background: 'white' }}
              />
            </div>
          </div>
        </section>

        {/* Location grid */}
        <section className="section-pad bg-white">
          <div className="site-container">

            {filtered.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-display text-[22px] text-text mb-3">No areas found</p>
                <p className="font-sans text-[14px] text-text-muted mb-6">
                  We may still cover your area. Contact us directly.
                </p>
                <button onClick={() => setModalOpen(true)} className="btn-primary">
                  Get Matched — Free
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map(group => (
                  <div key={group.region} className="border border-[#f0eee8]">
                    {/* Region header */}
                    <div className="p-5 border-b border-[#f0eee8]" style={{ background: 'var(--green-soft)' }}>
                      <div className="flex items-start justify-between gap-3">
                        <h2 className="font-display text-[18px] text-text leading-snug">{group.region}</h2>
                        <span className="font-sans text-[10px] uppercase tracking-widest font-semibold px-2 py-1 flex-shrink-0"
                          style={{ background: 'var(--green-light)', color: 'var(--green-dark)' }}>
                          {group.postcode}
                        </span>
                      </div>
                    </div>
                    {/* Area list */}
                    <div className="divide-y divide-[#f0eee8]">
                      {group.areas.map(area => {
                        const slug = toSlug(area)
                        const spokePath = SPOKE_PAGES[slug]
                        return (
                          <div key={area} className="flex items-center justify-between px-5 py-3 hover:bg-[#fafaf8] transition-colors group">
                            <span className="font-sans text-[14px] text-text">{area}</span>
                            <div className="flex items-center gap-2">
                              {spokePath ? (
                                <Link href={spokePath}
                                  className="font-sans text-[11px] font-semibold no-underline px-2.5 py-1 border transition-colors"
                                  style={{ color: 'var(--green)', borderColor: 'var(--green-mid)' }}>
                                  Area guide →
                                </Link>
                              ) : (
                                <Link href="/property-accountants-harrow/"
                                  className="font-sans text-[11px] text-text-faint no-underline hover:text-brand transition-colors">
                                  Covered →
                                </Link>
                              )}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Postcode info strip */}
            <div className="mt-12 p-6 md:p-8 border border-[#f0eee8]" style={{ background: 'var(--green-soft)' }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="eyebrow mb-3">Coverage</p>
                  <h3 className="font-display text-[22px] text-text mb-3 leading-snug">
                    Don&apos;t see your exact area?
                  </h3>
                  <p className="font-sans text-[14px] text-text-muted leading-relaxed">
                    If your property is in or around the London Borough of Harrow, we can match you with a specialist regardless of your exact postcode. Our network covers all HA postcodes and the wider NW London, UB, and WD postcode areas.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['HA1','HA2','HA3','HA4','HA5','HA6','HA7','HA8','HA9','NW10','UB','WD'].map(pc => (
                    <span key={pc}
                      className="font-sans text-[13px] font-semibold px-3 py-2 border"
                      style={{ background: 'white', borderColor: 'var(--green-mid)', color: 'var(--green-dark)' }}>
                      {pc}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Spoke pages with content */}
        <section className="section-pad" style={{ background: 'var(--green-soft)' }}>
          <div className="site-container">
            <p className="eyebrow mb-4">Detailed Area Guides</p>
            <h2 className="font-display text-[1.8rem] md:text-[2.2rem] text-text mb-8 leading-tight">
              In-depth property tax information by Harrow area
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
              {[
                { name: 'Stanmore',           href: '/harrow/stanmore/',           postcode: 'HA7', desc: 'Detached stock, IHT planning' },
                { name: 'Pinner',             href: '/harrow/pinner/',             postcode: 'HA5', desc: 'Period homes, capital growth' },
                { name: 'Pinner Green',       href: '/harrow/pinner-green/',       postcode: 'HA5', desc: 'Premium residential, CGT focus' },
                { name: 'Hatch End',          href: '/harrow/hatch-end/',          postcode: 'HA5', desc: 'High-value, IHT planning' },
                { name: 'Northwood',          href: '/harrow/northwood/',          postcode: 'HA6', desc: 'Ultra-premium, wealth structuring' },
                { name: 'Ruislip',            href: '/harrow/ruislip/',            postcode: 'HA4', desc: 'Premium, CGT & IHT focus' },
                { name: 'Eastcote',           href: '/harrow/eastcote/',           postcode: 'HA4', desc: 'Premium residential, mid-term' },
                { name: 'Harrow on the Hill', href: '/harrow/harrow-on-the-hill/', postcode: 'HA1', desc: 'Mixed stock, high demand' },
                { name: 'Harrow Town Centre', href: '/harrow/harrow-town-centre/', postcode: 'HA1', desc: 'Dense rental, Section 24' },
                { name: 'Wealdstone',         href: '/harrow/wealdstone/',         postcode: 'HA3', desc: 'HMO-heavy, Section 24 hotspot' },
                { name: 'Kenton',             href: '/harrow/kenton/',             postcode: 'HA3', desc: 'Long-term hold, IHT focus' },
                { name: 'North Harrow',       href: '/harrow/north-harrow/',       postcode: 'HA2', desc: 'Mid-portfolio, Section 24' },
                { name: 'West Harrow',        href: '/harrow/west-harrow/',        postcode: 'HA2', desc: 'Steady BTL, medium-term' },
                { name: 'Headstone',          href: '/harrow/headstone/',          postcode: 'HA2', desc: 'Residential BTL, SPV focus' },
                { name: 'South Harrow',       href: '/harrow/south-harrow/',       postcode: 'HA2', desc: 'High-yield, HMO operators' },
                { name: 'Rayners Lane',       href: '/harrow/rayners-lane/',       postcode: 'HA2', desc: 'Active BTL, yield-focused' },
                { name: 'North Wembley',      href: '/harrow/north-wembley/',      postcode: 'HA9', desc: 'Yield-focused, active investors' },
                { name: 'Edgware',            href: '/harrow/edgware/',            postcode: 'HA8', desc: 'Portfolio building, SDLT' },
                { name: 'Canons Park',        href: '/harrow/canons-park/',        postcode: 'HA8', desc: 'Premium HA8, CGT & IHT' },
                { name: 'Queensbury',         href: '/harrow/queensbury/',         postcode: 'HA8', desc: 'Growing investor interest' },
                { name: 'Burnt Oak',          href: '/harrow/burnt-oak/',          postcode: 'HA8', desc: 'Active portfolio building' },
              ].map(spoke => (
                <Link key={spoke.href} href={spoke.href}
                  className="flex flex-col p-5 bg-white border border-[#e8f0e8] no-underline hover:border-brand transition-colors group">
                  <span className="font-sans text-[10px] uppercase tracking-widest font-semibold mb-2"
                    style={{ color: 'var(--green)' }}>
                    {spoke.postcode}
                  </span>
                  <span className="font-display text-[18px] text-text mb-2 group-hover:text-brand transition-colors">
                    {spoke.name}
                  </span>
                  <span className="font-sans text-[12px] text-text-faint">{spoke.desc}</span>
                  <span className="font-sans text-[12px] mt-3" style={{ color: 'var(--green)' }}>
                    View area guide →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'var(--green)' }} className="py-16">
          <div className="site-container text-center">
            <h2 className="font-display text-[1.8rem] md:text-h2 text-white mb-4 leading-tight">
              Find your local property tax specialist
            </h2>
            <p className="font-sans text-[16px] mb-8 max-w-md mx-auto" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Free matching, 48-hour introduction guarantee. ACCA and ICAEW certified specialists only.
            </p>
            <button onClick={() => setModalOpen(true)}
              className="font-sans font-bold text-[14px] px-10 py-4 border-0 cursor-pointer"
              style={{ background: 'white', color: 'var(--green)' }}>
              Get Matched — Free
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
