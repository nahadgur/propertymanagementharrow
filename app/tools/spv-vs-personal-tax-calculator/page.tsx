import type { Metadata } from 'next'
import { siteConfig } from '@/data/site'
import SPVCalcContent from './SPVCalcContent'

export const metadata: Metadata = {
  title: 'SPV vs Personal Tax Calculator for UK Landlords | Property Accountants Harrow',
  description: 'Compare annual tax personally vs in an SPV limited company. Includes estimated SDLT and CGT transfer costs and breakeven calculation. Free interactive tool.',
  alternates: {
    canonical: `${siteConfig.url}/tools/spv-vs-personal-tax-calculator/`,
  },
  openGraph: {
    title: 'SPV vs Personal Tax Calculator for UK Landlords | Property Accountants Harrow',
    description: 'Compare annual tax personally vs in an SPV limited company. Includes estimated SDLT and CGT transfer costs and breakeven calculation. Free interactive tool.',
    url: `${siteConfig.url}/tools/spv-vs-personal-tax-calculator/`,
    type: 'website',
  },
}

export default function Page() {
  return <SPVCalcContent />
}
