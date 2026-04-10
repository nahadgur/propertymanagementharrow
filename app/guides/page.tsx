import type { Metadata } from 'next'
import { siteConfig } from '@/data/site'
import GuidesContent from './GuidesContent'

export const metadata: Metadata = {
  title: 'Property Management Guides for UK Landlords — HMO Licensing, Compliance, Tenant Screening | Property Management Harrow',
  description: 'In-depth property management guides for Harrow landlords — HMO licensing, compliance checklists, tenant screening, deposit protection, and switching agents. Expert advice from qualified specialists.',
  alternates: {
    canonical: `${siteConfig.url}/guides/`,
  },
  openGraph: {
    title: 'Property Management Guides for UK Landlords — HMO Licensing, Compliance, Tenant Screening | Property Management Harrow',
    description: 'In-depth property management guides for Harrow landlords — HMO licensing, compliance checklists, tenant screening, deposit protection, and switching agents. Expert advice from qualified specialists.',
    url: `${siteConfig.url}/guides/`,
    type: 'website',
  },
}

export default function Page() {
  return <GuidesContent />
}
