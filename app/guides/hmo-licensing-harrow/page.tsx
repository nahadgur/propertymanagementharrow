import type { Metadata } from 'next'
import { siteConfig } from '@/data/site'
import HMOLicensingGuideContent from './HMOLicensingGuideContent'

export const metadata: Metadata = {
  title: 'HMO Licensing in Harrow: Complete Landlord Guide (2026) | Property Management Harrow',
  description: 'Complete guide to HMO licensing in Harrow — mandatory and additional licensing, application process, licence conditions, room sizes, fire safety, penalties, and rent repayment orders.',
  alternates: {
    canonical: `${siteConfig.url}/guides/hmo-licensing-harrow/`,
  },
  openGraph: {
    title: 'HMO Licensing in Harrow: Complete Landlord Guide (2026) | Property Management Harrow',
    description: 'Complete guide to HMO licensing in Harrow — mandatory and additional licensing, application process, licence conditions, room sizes, fire safety, penalties, and rent repayment orders.',
    url: `${siteConfig.url}/guides/hmo-licensing-harrow/`,
    type: 'website',
  },
}

export default function Page() {
  return <HMOLicensingGuideContent />
}
