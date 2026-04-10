import type { Metadata } from 'next'
import { siteConfig } from '@/data/site'
import Section24GuideContent from './Section24GuideContent'

export const metadata: Metadata = {
  title: 'The Ultimate Guide to Section 24 Tax for UK Landlords (2025/26) | Property Accountants Harrow',
  description: 'Complete guide to Section 24 — how the mortgage interest restriction works, who is affected, the real annual cost, and legal mitigation strategies. Includes interactive calculator.',
  alternates: {
    canonical: `${siteConfig.url}/guides/ultimate-guide-section-24/`,
  },
  openGraph: {
    title: 'The Ultimate Guide to Section 24 Tax for UK Landlords (2025/26) | Property Accountants Harrow',
    description: 'Complete guide to Section 24 — how the mortgage interest restriction works, who is affected, the real annual cost, and legal mitigation strategies. Includes interactive calculator.',
    url: `${siteConfig.url}/guides/ultimate-guide-section-24/`,
    type: 'website',
  },
}

export default function Page() {
  return <Section24GuideContent />
}
