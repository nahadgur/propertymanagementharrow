import type { Metadata } from 'next'
import { siteConfig } from '@/data/site'
import AboutContent from './AboutContent'

export const metadata: Metadata = {
  title: 'About Property Accountants Harrow | Vetted Property Tax Specialist Network',
  description: 'Property Accountants Harrow connects landlords and investors with ACCA and ICAEW certified property tax accountants across the London Borough of Harrow. Free matching service.',
  alternates: {
    canonical: `${siteConfig.url}/about/`,
  },
  openGraph: {
    title: 'About Property Accountants Harrow | Vetted Property Tax Specialist Network',
    description: 'Property Accountants Harrow connects landlords and investors with ACCA and ICAEW certified property tax accountants across the London Borough of Harrow. Free matching service.',
    url: `${siteConfig.url}/about/`,
    type: 'website',
  },
}

export default function Page() {
  return <AboutContent />
}
