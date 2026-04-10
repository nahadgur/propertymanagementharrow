import type { Metadata } from 'next'
import { siteConfig } from '@/data/site'
import CGTGuideContent from './CGTGuideContent'

export const metadata: Metadata = {
  title: 'Capital Gains Tax on UK Property: The Complete Guide (2025/26) | Property Accountants Harrow',
  description: 'CGT on residential property — rates, Private Residence Relief, the 60-day rule, disposal timing strategies, spousal transfers, and non-resident CGT. Includes CGT calculator.',
  alternates: {
    canonical: `${siteConfig.url}/guides/capital-gains-tax-uk-property/`,
  },
  openGraph: {
    title: 'Capital Gains Tax on UK Property: The Complete Guide (2025/26) | Property Accountants Harrow',
    description: 'CGT on residential property — rates, Private Residence Relief, the 60-day rule, disposal timing strategies, spousal transfers, and non-resident CGT. Includes CGT calculator.',
    url: `${siteConfig.url}/guides/capital-gains-tax-uk-property/`,
    type: 'website',
  },
}

export default function Page() {
  return <CGTGuideContent />
}
