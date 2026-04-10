import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Property Management Harrow | Vetted Property Management Specialists',
    template: '%s | Property Management Harrow',
  },
  description:
    'Connect with vetted ARLA Propertymark and RICS qualified property management specialists in Harrow. Experts in lettings management, tenant sourcing, rent collection, compliance, and portfolio management for landlords.',
  metadataBase: new URL('https://www.propertymanagementharrow.co.uk'),
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.propertymanagementharrow.co.uk',
    siteName: 'Property Management Harrow',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col min-h-screen" style={{ background: 'var(--cream)', color: 'var(--text)', fontFamily: "'Raleway', sans-serif" }}>
        {children}
      </body>
    </html>
  )
}
