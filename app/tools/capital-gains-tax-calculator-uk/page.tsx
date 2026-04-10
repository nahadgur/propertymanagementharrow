import type { Metadata } from 'next'
import { siteConfig } from '@/data/site'
import CGTCalcContent from './CGTCalcContent'

export const metadata: Metadata = {
  title: 'UK Property CGT Calculator 2025/26 — Including PRR | Property Accountants Harrow',
  description: 'Estimate Capital Gains Tax on a UK residential property disposal. Includes Private Residence Relief, lettings relief, the £3,000 Annual Exempt Amount and 2025/26 rates.',
  alternates: {
    canonical: `${siteConfig.url}/tools/capital-gains-tax-calculator-uk/`,
  },
  openGraph: {
    title: 'UK Property CGT Calculator 2025/26 — Including PRR | Property Accountants Harrow',
    description: 'Estimate Capital Gains Tax on a UK residential property disposal. Includes Private Residence Relief, lettings relief, the £3,000 Annual Exempt Amount and 2025/26 rates.',
    url: `${siteConfig.url}/tools/capital-gains-tax-calculator-uk/`,
    type: 'website',
  },
}

export default function Page() {
  return <CGTCalcContent />
}
