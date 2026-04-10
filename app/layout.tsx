import type { Metadata } from 'next'
import { Fraunces, Epilogue } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['opsz'],
})

const epilogue = Epilogue({
  subsets: ['latin'],
  variable: '--font-epilogue',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Property Accountants Harrow | Vetted Property Tax Specialists',
    template: '%s | Property Accountants Harrow',
  },
  description:
    'Connect with vetted ACCA and ICAEW certified property tax accountants in Harrow. Specialists in Section 24 mitigation, SPV incorporation, CGT planning and inheritance tax for property investors.',
  metadataBase: new URL('https://www.propertyaccountantsharrow.co.uk'),
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.propertyaccountantsharrow.co.uk',
    siteName: 'Property Accountants Harrow',
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
    <html lang="en" className={`${fraunces.variable} ${epilogue.variable}`}>
      <body className="font-sans bg-white text-text antialiased flex flex-col min-h-screen">
        {children}
      </body>
    </html>
  )
}
