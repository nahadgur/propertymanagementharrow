'use client'

import { useState } from 'react'
import Link from 'next/link'
import { siteConfig, navLinks } from '@/data/site'

interface HeaderProps {
  onOpenModal: () => void
}

export default function Header({ onOpenModal }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* Top bar */}
      <div style={{ background: 'var(--green)' }} className="hidden md:block">
        <div className="site-container flex justify-between items-center h-9">
          <p className="text-white/70 text-[11px] tracking-wide">
            Harrow&apos;s Vetted Property Management Specialists — ARLA Propertymark Members
          </p>
          <div className="flex items-center gap-6">
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
              className="text-white text-[11px] font-semibold tracking-wide hover:text-white/80 transition-colors"
            >
              {siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-white/70 text-[11px] hover:text-white transition-colors"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="border-b border-[#f0eee8] bg-white relative">
        <div className="site-container flex items-center justify-between h-[68px]">
          {/* Logo */}
          <Link href="/" className="flex flex-col gap-0.5 no-underline">
            <span className="font-display text-[16px] md:text-[19px] text-text leading-none tracking-[-0.01em]">
              Property<span style={{ color: 'var(--green)' }}>Management</span>Harrow
            </span>
            <span className="text-[9px] uppercase tracking-[0.18em] text-text-faint font-medium font-sans">
              Vetted Specialist Network
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[12px] text-text-muted no-underline hover:text-text transition-colors font-sans tracking-wide"
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={onOpenModal}
              className="btn-primary text-[12px] py-3 px-6"
            >
              Get Matched — Free
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-[5px] p-2 cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-[1.5px] bg-text transition-all ${mobileOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
            <span className={`block w-5 h-[1.5px] bg-text transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-[1.5px] bg-text transition-all ${mobileOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
          </button>
        </div>

        {/* Mobile menu - absolute so it overlays content */}
        {mobileOpen && (
          <div className="lg:hidden absolute left-0 right-0 top-full z-50 border-t border-[#f0eee8] bg-white shadow-xl px-6 py-6 flex flex-col gap-5">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[14px] text-text-muted no-underline font-sans"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => { setMobileOpen(false); onOpenModal() }}
              className="btn-primary text-[13px] py-3 mt-2 self-start px-6"
            >
              Get Matched — Free
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}
