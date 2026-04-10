import type { Metadata } from 'next'
import { siteConfig } from '@/data/site'
import LandlordsContent from './LandlordsContent'

export const metadata: Metadata = {
  title: 'Property Tax for Harrow Landlords — All Portfolio Types | Property Accountants Harrow',
  description: 'Specialist property tax advice for accidental landlords, portfolio investors, HMO operators, and non-resident landlords in Harrow. ACCA and ICAEW certified. Free matching.',
  alternates: {
    canonical: `${siteConfig.url}/landlords/`,
  },
  openGraph: {
    title: 'Property Tax for Harrow Landlords — All Portfolio Types | Property Accountants Harrow',
    description: 'Specialist property tax advice for accidental landlords, portfolio investors, HMO operators, and non-resident landlords in Harrow. ACCA and ICAEW certified. Free matching.',
    url: `${siteConfig.url}/landlords/`,
    type: 'website',
  },
}

export default function Page() {
  return <LandlordsContent />
}
