import type { Metadata } from 'next'
import { siteConfig } from '@/data/site'
import FlippingGuideContent from './FlippingGuideContent'

export const metadata: Metadata = {
  title: 'Property Flipping vs Buy-to-Let: UK Tax Rules Explained (2025) | Property Accountants Harrow',
  description: 'HMRC's badges of trade, investor vs trader classification, income tax vs CGT on flipping, CIS obligations for developers, and how to structure a property development business.',
  alternates: {
    canonical: `${siteConfig.url}/guides/property-flipping-vs-buy-to-let/`,
  },
  openGraph: {
    title: 'Property Flipping vs Buy-to-Let: UK Tax Rules Explained (2025) | Property Accountants Harrow',
    description: 'HMRC's badges of trade, investor vs trader classification, income tax vs CGT on flipping, CIS obligations for developers, and how to structure a property development business.',
    url: `${siteConfig.url}/guides/property-flipping-vs-buy-to-let/`,
    type: 'website',
  },
}

export default function Page() {
  return <FlippingGuideContent />
}
