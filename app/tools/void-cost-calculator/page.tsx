import type { Metadata } from 'next'
import { siteConfig } from '@/data/site'
import VoidCostCalcContent from './VoidCostCalcContent'

export const metadata: Metadata = {
  title: 'Void Cost Calculator — Calculate Empty Property Costs | Property Management Harrow',
  description: 'Calculate the true cost of void periods on your rental property. See lost rent, re-letting costs, and how professional management can reduce voids. Free tool for Harrow landlords.',
  alternates: {
    canonical: `${siteConfig.url}/tools/void-cost-calculator/`,
  },
  openGraph: {
    title: 'Void Cost Calculator — Calculate Empty Property Costs | Property Management Harrow',
    description: 'Calculate the true cost of void periods on your rental property. See lost rent, re-letting costs, and how professional management can reduce voids. Free tool for Harrow landlords.',
    url: `${siteConfig.url}/tools/void-cost-calculator/`,
    type: 'website',
  },
}

export default function Page() {
  return <VoidCostCalcContent />
}
