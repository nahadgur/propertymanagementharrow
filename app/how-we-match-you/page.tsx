import type { Metadata } from 'next'
import { siteConfig } from '@/data/site'
import HowWeMatchContent from './HowWeMatchContent'

export const metadata: Metadata = {
  title: 'How We Match You With a Property Tax Accountant | Property Accountants Harrow',
  description: 'Our matching process: tell us about your portfolio and we introduce you to a vetted ACCA or ICAEW certified property tax specialist within 48 hours. Free for all landlords.',
  alternates: {
    canonical: `${siteConfig.url}/how-we-match-you/`,
  },
  openGraph: {
    title: 'How We Match You With a Property Tax Accountant | Property Accountants Harrow',
    description: 'Our matching process: tell us about your portfolio and we introduce you to a vetted ACCA or ICAEW certified property tax specialist within 48 hours. Free for all landlords.',
    url: `${siteConfig.url}/how-we-match-you/`,
    type: 'website',
  },
}

export default function Page() {
  return <HowWeMatchContent />
}
