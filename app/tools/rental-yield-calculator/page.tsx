import type { Metadata } from 'next'
import { siteConfig } from '@/data/site'
import RentalYieldCalcContent from './RentalYieldCalcContent'

export const metadata: Metadata = {
  title: 'Rental Yield Calculator — Free Tool for Harrow Landlords | Property Management Harrow',
  description: 'Calculate gross and net rental yield for your Harrow property. Enter property value, rent, and costs to see your true return. Free interactive calculator for landlords.',
  alternates: {
    canonical: `${siteConfig.url}/tools/rental-yield-calculator/`,
  },
  openGraph: {
    title: 'Rental Yield Calculator — Free Tool for Harrow Landlords | Property Management Harrow',
    description: 'Calculate gross and net rental yield for your Harrow property. Enter property value, rent, and costs to see your true return. Free interactive calculator for landlords.',
    url: `${siteConfig.url}/tools/rental-yield-calculator/`,
    type: 'website',
  },
}

export default function Page() {
  return <RentalYieldCalcContent />
}
