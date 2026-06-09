'use client'

import Link from 'next/link'
import { useState } from 'react'

const NAV_LINKS = [
  { label: 'Services',  href: '/services/' },
  { label: 'Guides',    href: '/guides/' },
  { label: 'Landlords', href: '/landlords/' },
  { label: 'About',     href: '/about/' },
  { label: 'Contact',   href: '/contact/' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header
      className="sticky top-0 z-50"
      style={{ background: '#fff', borderBottom: '1px solid var(--border)' }}
    >
      <div className="site-container flex items-center justify-between h-[60px]">

        {/* Logo */}
        <Link href="/" className="no-underline flex flex-col gap-0">
          <span className="font-raleway font-800 text-[15px] leading-none tracking-[-0.01em]" style={{ color: 'var(--text)' }}>
            Harrow <span style={{ color: 'var(--green)' }}>Property Management</span>
          </span>
          <span className="font-raleway font-500 text-[9px] uppercase tracking-[.14em]" style={{ color: 'var(--text-light)' }}>
            ARLA Registered · Est. 2011
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="font-raleway font-600 text-[11px] uppercase tracking-[.05em] no-underline transition-colors"
              style={{ color: '#9aab9e' }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact/"
            className="pm-btn-outline text-[11px]"
          >
            Free Quote
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1 border-0 bg-transparent cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-[1.5px]" style={{ background: 'var(--text)', transition: 'transform .2s', transform: open ? 'translateY(6.5px) rotate(45deg)' : 'none' }} />
          <span className="block w-5 h-[1.5px]" style={{ background: 'var(--text)', opacity: open ? 0 : 1, transition: 'opacity .2s' }} />
          <span className="block w-5 h-[1.5px]" style={{ background: 'var(--text)', transition: 'transform .2s', transform: open ? 'translateY(-6.5px) rotate(-45deg)' : 'none' }} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div
          className="md:hidden flex flex-col border-t"
          style={{ background: '#fff', borderColor: 'var(--border)' }}
        >
          {NAV_LINKS.map(l => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-raleway font-600 text-[12px] uppercase tracking-[.05em] no-underline px-7 py-3 border-b"
              style={{ color: 'var(--text-muted)', borderColor: 'var(--border)' }}
            >
              {l.label}
            </Link>
          ))}
          <div className="px-7 py-4">
            <Link href="/contact/" className="pm-btn block text-center" onClick={() => setOpen(false)}>
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
