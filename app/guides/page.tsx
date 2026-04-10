import type { Metadata } from 'next'
import { siteConfig } from '@/data/site'
import GuidesContent from './GuidesContent'

export const metadata: Metadata = {
  title: 'Property Tax Guides for UK Landlords — Section 24, SPV, CGT | Property Accountants Harrow',
  description: 'In-depth property tax guides with HMRC citations — Section 24, SPV incorporation, CGT, allowable expenses, and property flipping. Includes interactive calculators.',
  alternates: {
    canonical: `${siteConfig.url}/guides/`,
  },
  openGraph: {
    title: 'Property Tax Guides for UK Landlords — Section 24, SPV, CGT | Property Accountants Harrow',
    description: 'In-depth property tax guides with HMRC citations — Section 24, SPV incorporation, CGT, allowable expenses, and property flipping. Includes interactive calculators.',
    url: `${siteConfig.url}/guides/`,
    type: 'website',
  },
}

export default function Page() {
  return <GuidesContent />
}
