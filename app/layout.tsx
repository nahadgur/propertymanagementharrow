import type { Metadata } from 'next'
import { Raleway, Libre_Baskerville } from 'next/font/google'
import './globals.css'

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
})

const baskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-baskerville',
})

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
  verification: {
    google: 'XFzSXTpxepsWdCH4sSHWBYMVJtL5yDOeF684TIUe6q4',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${raleway.variable} ${baskerville.variable}`}>
      <body className="antialiased flex flex-col min-h-screen" style={{ background: 'var(--cream)', color: 'var(--text)', fontFamily: 'var(--font-raleway), sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
