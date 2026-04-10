import type { Metadata } from 'next'
import { siteConfig } from '@/data/site'
import ManagementFeeCalcContent from './ManagementFeeCalcContent'

export const metadata: Metadata = {
  title: 'Management Fee Calculator — Compare Property Management Costs | Property Management Harrow',
  description: 'Calculate property management fees and compare professional management vs self-management costs. Free interactive tool for Harrow landlords.',
  alternates: {
    canonical: `${siteConfig.url}/tools/management-fee-calculator/`,
  },
  openGraph: {
    title: 'Management Fee Calculator — Compare Property Management Costs | Property Management Harrow',
    description: 'Calculate property management fees and compare professional management vs self-management costs. Free interactive tool for Harrow landlords.',
    url: `${siteConfig.url}/tools/management-fee-calculator/`,
    type: 'website',
  },
}

export default function Page() {
  return <ManagementFeeCalcContent />
}
