import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 — Page Not Found',
}

export default function NotFound() {
  return (
    <main className="flex-grow flex items-center justify-center bg-white py-32">
      <div className="text-center site-container max-w-lg">
        <p className="font-display text-[80px] leading-none mb-4" style={{ color: 'var(--green-mid)' }}>
          404
        </p>
        <h1 className="font-display text-h2 text-text mb-4 leading-tight">
          Page not found.
        </h1>
        <p className="font-sans text-[16px] text-text-muted leading-relaxed mb-10">
          The page you are looking for does not exist or has been moved. Return to the homepage or use the links below to find what you need.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/" className="btn-primary">Back to Homepage</Link>
          <Link href="/contact/" className="btn-outline">Contact Us</Link>
        </div>
        <div className="mt-12 flex flex-col gap-2 text-[14px]">
          {[
            { label: 'Residential Lettings Management', href: '/services/residential-lettings-management/' },
            { label: 'Tenant Find & Referencing', href: '/services/tenant-find-referencing/' },
            { label: 'Harrow Specialists', href: '/property-management-harrow/' },
            { label: 'How We Match You', href: '/how-we-match-you/' },
          ].map(l => (
            <Link key={l.href} href={l.href}
              className="no-underline font-sans" style={{ color: 'var(--green)' }}>
              {l.label} &rarr;
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
