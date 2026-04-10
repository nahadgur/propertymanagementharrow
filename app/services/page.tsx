import type { Metadata } from 'next'
import { siteConfig } from '@/data/site'
import ServicesContent from './ServicesContent'

export const metadata: Metadata = {
  title: 'Property Tax Services for Harrow Landlords | Property Accountants Harrow',
  description: 'Five specialist property tax services — Section 24 mitigation, SPV incorporation, CGT planning, SDLT planning, and inheritance tax structuring for Harrow landlords. Free matching.',
  alternates: {
    canonical: `${siteConfig.url}/services/`,
  },
  openGraph: {
    title: 'Property Tax Services for Harrow Landlords | Property Accountants Harrow',
    description: 'Five specialist property tax services — Section 24 mitigation, SPV incorporation, CGT planning, SDLT planning, and inheritance tax structuring for Harrow landlords. Free matching.',
    url: `${siteConfig.url}/services/`,
    type: 'website',
  },
}

export default function Page() {
  return <ServicesContent />
}
