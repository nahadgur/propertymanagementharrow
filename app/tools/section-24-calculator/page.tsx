import type { Metadata } from 'next'
import { siteConfig } from '@/data/site'
import Section24CalcContent from './Section24CalcContent'

export const metadata: Metadata = {
  title: 'Section 24 Tax Calculator — Calculate Your Annual Cost Free | Property Accountants Harrow',
  description: 'Calculate exactly how much Section 24 is costing you. Enter rental income and mortgage interest to see the annual, 5-year and 10-year impact. Free interactive calculator.',
  alternates: {
    canonical: `${siteConfig.url}/tools/section-24-calculator/`,
  },
  openGraph: {
    title: 'Section 24 Tax Calculator — Calculate Your Annual Cost Free | Property Accountants Harrow',
    description: 'Calculate exactly how much Section 24 is costing you. Enter rental income and mortgage interest to see the annual, 5-year and 10-year impact. Free interactive calculator.',
    url: `${siteConfig.url}/tools/section-24-calculator/`,
    type: 'website',
  },
}

export default function Page() {
  return <Section24CalcContent />
}
