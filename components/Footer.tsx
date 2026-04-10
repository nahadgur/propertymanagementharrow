import Link from 'next/link'
import { siteConfig, footerLinks } from '@/data/site'

export default function Footer() {
  const year = new Date().getFullYear()

  const Col = ({ heading, links }: { heading: string; links: { label: string; href: string }[] }) => (
    <div>
      <h4 className="text-[10px] uppercase tracking-[0.18em] text-white/30 font-700 mb-4">{heading}</h4>
      <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
        {links.map(link => (
          <li key={link.href}>
            <Link href={link.href} className="text-[13px] text-white/55 no-underline hover:text-white transition-colors">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <footer className="bg-[#0a1a0e] text-white/60 font-raleway">
      <div className="site-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-10">

          {/* Brand — spans 2 cols */}
          <div className="lg:col-span-2">
            <Link href="/" className="no-underline block mb-4">
              <span className="font-baskerville text-[18px] text-white leading-none tracking-[-0.01em]">
                Property<span style={{ color: 'var(--green)' }}>Management</span>Harrow
              </span>
            </Link>
            <p className="text-[13px] leading-relaxed text-white/50 max-w-xs mb-6">
              We connect Harrow&apos;s landlords and freeholders with vetted property management professionals who specialise in residential lettings, block management, and HMO services.
            </p>
            <div className="flex flex-col gap-1.5">
              <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                className="text-[13px] text-white/60 no-underline hover:text-white transition-colors">
                {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`}
                className="text-[13px] text-white/60 no-underline hover:text-white transition-colors">
                {siteConfig.email}
              </a>
            </div>
          </div>

          <Col heading="Services"  links={footerLinks.services} />
          <Col heading="Harrow"    links={footerLinks.harrow} />
          <Col heading="Landlords" links={footerLinks.landlords} />

          {/* Tools + Guides stacked */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.18em] text-white/30 font-700 mb-4">Free Tools</h4>
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0 mb-8">
              {footerLinks.tools.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[13px] text-white/55 no-underline hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-[10px] uppercase tracking-[0.18em] text-white/30 font-700 mb-4">Guides</h4>
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
              {footerLinks.guides.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[13px] text-white/55 no-underline hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Col heading="Company" links={footerLinks.legal} />
        </div>
      </div>

      {/* Legal strip */}
      <div className="border-t border-white/5">
        <div className="site-container py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <p className="text-[11px] text-white/30 leading-relaxed max-w-2xl">
            &copy; {year} Property Management Harrow. A lead generation and specialist matching service. We are not a property management firm and do not manage properties directly. All specialists in our network hold relevant professional memberships and client money protection. ICO registered.
          </p>
          <div className="flex gap-4 flex-shrink-0">
            <Link href="/privacy-policy/" className="text-[11px] text-white/25 no-underline hover:text-white/50 transition-colors">Privacy</Link>
            <Link href="/terms/"          className="text-[11px] text-white/25 no-underline hover:text-white/50 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
