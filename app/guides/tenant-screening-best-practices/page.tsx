import type { Metadata } from 'next'
import { siteConfig } from '@/data/site'
import TenantScreeningGuideContent from './TenantScreeningGuideContent'

export const metadata: Metadata = {
  title: 'Tenant Screening Best Practices for UK Landlords | Property Management Harrow',
  description: 'Expert guide to tenant screening for UK landlords — credit checks, employer verification, previous landlord references, Right to Rent, affordability assessments, and red flags to watch for.',
  alternates: {
    canonical: `${siteConfig.url}/guides/tenant-screening-best-practices/`,
  },
  openGraph: {
    title: 'Tenant Screening Best Practices for UK Landlords | Property Management Harrow',
    description: 'Expert guide to tenant screening for UK landlords — credit checks, employer verification, previous landlord references, Right to Rent, affordability assessments, and red flags to watch for.',
    url: `${siteConfig.url}/guides/tenant-screening-best-practices/`,
    type: 'website',
  },
}

export default function Page() {
  return <TenantScreeningGuideContent />
}
