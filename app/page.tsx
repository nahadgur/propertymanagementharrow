import type { Metadata } from 'next'
import HomePageContent from '@/components/HomePageContent'

export const metadata: Metadata = {
  title: 'Property Management Harrow | Vetted Property Management Specialists',
  description:
    'Connect with vetted ARLA Propertymark and RICS qualified property management specialists in Harrow. Experts in lettings management, tenant sourcing, rent collection, compliance, and portfolio management for landlords.',
  alternates: {
    canonical: 'https://www.propertymanagementharrow.co.uk/',
  },
}

export default function Page() {
  return <HomePageContent />
}
