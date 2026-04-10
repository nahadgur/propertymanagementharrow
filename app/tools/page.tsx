import type { Metadata } from 'next'
import { siteConfig } from '@/data/site'
import ToolsContent from './ToolsContent'

export const metadata: Metadata = {
  title: 'Free Property Tax Calculators for UK Landlords | Property Accountants Harrow',
  description: 'Free interactive property tax calculators — Section 24 cost, SPV vs personal tax, and UK residential property CGT. Updated for 2025/26.',
  alternates: {
    canonical: `${siteConfig.url}/tools/`,
  },
  openGraph: {
    title: 'Free Property Tax Calculators for UK Landlords | Property Accountants Harrow',
    description: 'Free interactive property tax calculators — Section 24 cost, SPV vs personal tax, and UK residential property CGT. Updated for 2025/26.',
    url: `${siteConfig.url}/tools/`,
    type: 'website',
  },
}

export default function Page() {
  return <ToolsContent />
}
