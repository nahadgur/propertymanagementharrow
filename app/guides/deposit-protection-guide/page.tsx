import type { Metadata } from 'next'
import { siteConfig } from '@/data/site'
import DepositProtectionGuideContent from './DepositProtectionGuideContent'

export const metadata: Metadata = {
  title: 'Deposit Protection Guide for UK Landlords: Rules, Schemes & Penalties | Property Management Harrow',
  description: 'Complete guide to deposit protection for UK landlords — government-approved schemes, the 30-day deadline, prescribed information, penalties for non-compliance, and end-of-tenancy deductions.',
  alternates: {
    canonical: `${siteConfig.url}/guides/deposit-protection-guide/`,
  },
  openGraph: {
    title: 'Deposit Protection Guide for UK Landlords: Rules, Schemes & Penalties | Property Management Harrow',
    description: 'Complete guide to deposit protection for UK landlords — government-approved schemes, the 30-day deadline, prescribed information, penalties for non-compliance, and end-of-tenancy deductions.',
    url: `${siteConfig.url}/guides/deposit-protection-guide/`,
    type: 'website',
  },
}

export default function Page() {
  return <DepositProtectionGuideContent />
}
