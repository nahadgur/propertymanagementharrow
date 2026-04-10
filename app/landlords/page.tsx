import type { Metadata } from 'next'
import { siteConfig } from '@/data/site'
import LandlordsContent from './LandlordsContent'

export const metadata: Metadata = {
  title: 'Property Management for Harrow Landlords — All Portfolio Types | Property Management Harrow',
  description: 'Specialist property management for accidental landlords, portfolio investors, HMO operators, and non-resident landlords in Harrow. ARLA Propertymark and RICS qualified. Free matching.',
  alternates: {
    canonical: `${siteConfig.url}/landlords/`,
  },
  openGraph: {
    title: 'Property Management for Harrow Landlords — All Portfolio Types | Property Management Harrow',
    description: 'Specialist property management for accidental landlords, portfolio investors, HMO operators, and non-resident landlords in Harrow. ARLA Propertymark and RICS qualified. Free matching.',
    url: `${siteConfig.url}/landlords/`,
    type: 'website',
  },
}

export default function Page() {
  return <LandlordsContent />
}
