import type { Metadata } from 'next'
import { siteConfig } from '@/data/site'
import IncorporationGuideContent from './IncorporationGuideContent'

export const metadata: Metadata = {
  title: 'How to Incorporate a Buy-to-Let Portfolio Into an SPV (2025) | Property Accountants Harrow',
  description: 'Step-by-step guide to SPV incorporation — SDLT cost, CGT on transfer, annual tax saving, and breakeven calculation. Includes SPV vs personal tax calculator.',
  alternates: {
    canonical: `${siteConfig.url}/guides/incorporating-buy-to-let-portfolio/`,
  },
  openGraph: {
    title: 'How to Incorporate a Buy-to-Let Portfolio Into an SPV (2025) | Property Accountants Harrow',
    description: 'Step-by-step guide to SPV incorporation — SDLT cost, CGT on transfer, annual tax saving, and breakeven calculation. Includes SPV vs personal tax calculator.',
    url: `${siteConfig.url}/guides/incorporating-buy-to-let-portfolio/`,
    type: 'website',
  },
}

export default function Page() {
  return <IncorporationGuideContent />
}
