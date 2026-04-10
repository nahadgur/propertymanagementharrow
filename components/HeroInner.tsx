'use client'

import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface Props {
  breadcrumbs:  BreadcrumbItem[]
  title:        string          // plain part of headline
  titleItalic?: string          // italic accent part (renders in --green-mid)
  description:  string
  ctaText:      string
  ctaHref:      string
  image:        string          // path to image e.g. '/images/hmo-management.png'
  onCtaClick?:  () => void      // optional — use instead of href for modal trigger
}

export default function HeroInner({
  breadcrumbs,
  title,
  titleItalic,
  description,
  ctaText,
  ctaHref,
  image,
  onCtaClick,
}: Props) {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-[1fr_200px] overflow-hidden"
      style={{ minHeight: 200 }}
    >
      {/* ── Left: green content panel ── */}
      <div
        className="flex flex-col justify-center px-7 md:px-10 py-10 md:py-12"
        style={{ background: 'var(--green)' }}
      >
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-5 flex-wrap">
          {breadcrumbs.map((item, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              )}
              {item.href ? (
                <Link
                  href={item.href}
                  className="font-raleway text-[11px] font-500 no-underline transition-colors"
                  style={{ color: 'rgba(255,255,255,0.5)' }}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className="font-raleway text-[11px] font-600"
                  style={{ color: 'rgba(255,255,255,0.75)' }}
                >
                  {item.label}
                </span>
              )}
            </span>
          ))}
        </nav>

        {/* Headline */}
        <h1 className="font-baskerville text-[clamp(24px,3.5vw,36px)] leading-[1.1] text-white mb-4">
          {title}
          {titleItalic && (
            <>
              {' '}
              <em
                className="font-baskerville italic"
                style={{ color: 'var(--green-mid)' }}
              >
                {titleItalic}
              </em>
            </>
          )}
        </h1>

        {/* Description */}
        <p
          className="font-raleway font-400 text-[13px] leading-[1.75] mb-6 max-w-[520px]"
          style={{ color: 'rgba(255,255,255,0.6)' }}
        >
          {description}
        </p>

        {/* CTA */}
        {onCtaClick ? (
          <button
            onClick={onCtaClick}
            className="font-raleway font-700 text-[12px] uppercase tracking-[.06em] inline-flex items-center gap-2 border-0 cursor-pointer self-start px-6 py-3 rounded"
            style={{ background: '#fff', color: 'var(--green)' }}
          >
            {ctaText}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2.5" strokeLinecap="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        ) : (
          <Link
            href={ctaHref}
            className="font-raleway font-700 text-[12px] uppercase tracking-[.06em] inline-flex items-center gap-2 no-underline self-start px-6 py-3 rounded"
            style={{ background: '#fff', color: 'var(--green)' }}
          >
            {ctaText}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2.5" strokeLinecap="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        )}
      </div>

      {/* ── Right: photo strip — hidden on mobile ── */}
      <div className="hidden md:block relative overflow-hidden">
        <img
          src={image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Subtle left-edge fade to blend with green panel */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(45,122,79,0.35) 0%, transparent 40%)',
          }}
        />
      </div>
    </section>
  )
}
