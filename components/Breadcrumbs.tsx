import Link from 'next/link'

interface Crumb {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items:  Crumb[]
  dark?:  boolean
}

export default function Breadcrumbs({ items, dark = true }: BreadcrumbsProps) {
  const baseColor = dark ? 'rgba(255,255,255,0.4)' : '#999'
  const activeColor = dark ? 'rgba(255,255,255,0.75)' : '#333'

  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[12px] font-sans mb-8 flex-wrap">
      {items.map((crumb, i) => (
        <span key={i} className="flex items-center gap-2">
          {i > 0 && <span style={{ color: dark ? 'rgba(255,255,255,0.2)' : '#ccc' }}>/</span>}
          {crumb.href ? (
            <Link
              href={crumb.href}
              className="no-underline transition-colors hover:opacity-80"
              style={{ color: baseColor }}
            >
              {crumb.label}
            </Link>
          ) : (
            <span style={{ color: activeColor }}>{crumb.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
