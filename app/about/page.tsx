import type { Metadata } from 'next'
import { siteConfig } from '@/data/site'
import AboutContent from './AboutContent'

export const metadata: Metadata = {
  title: 'About Property Management Harrow | Vetted Property Management Network',
  description: 'Property Management Harrow connects landlords with vetted, ARLA Propertymark and RICS qualified property management professionals across the London Borough of Harrow. Free matching service.',
  alternates: {
    canonical: `${siteConfig.url}/about/`,
  },
  openGraph: {
    title: 'About Property Management Harrow | Vetted Property Management Network',
    description: 'Property Management Harrow connects landlords with vetted, ARLA Propertymark and RICS qualified property management professionals across the London Borough of Harrow. Free matching service.',
    url: `${siteConfig.url}/about/`,
    type: 'website',
  },
}

export default function Page() {
  return <AboutContent />
}
