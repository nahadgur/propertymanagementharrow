import type { Metadata } from 'next'
import { siteConfig } from '@/data/site'
import ComplianceChecklistContent from './ComplianceChecklistContent'

export const metadata: Metadata = {
  title: 'The Complete Landlord Compliance Checklist for UK Rental Properties | Property Management Harrow',
  description: 'Comprehensive landlord compliance checklist covering gas safety, EICR, EPC, deposit protection, Right to Rent, smoke and CO alarms, and Section 21 prerequisites for UK rental properties.',
  alternates: {
    canonical: `${siteConfig.url}/guides/landlord-compliance-checklist/`,
  },
  openGraph: {
    title: 'The Complete Landlord Compliance Checklist for UK Rental Properties | Property Management Harrow',
    description: 'Comprehensive landlord compliance checklist covering gas safety, EICR, EPC, deposit protection, Right to Rent, smoke and CO alarms, and Section 21 prerequisites for UK rental properties.',
    url: `${siteConfig.url}/guides/landlord-compliance-checklist/`,
    type: 'website',
  },
}

export default function Page() {
  return <ComplianceChecklistContent />
}
