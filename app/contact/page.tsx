import type { Metadata } from 'next'
import { siteConfig } from '@/data/site'
import ContactContent from './ContactContent'

export const metadata: Metadata = {
  title: 'Contact Property Management Harrow | Free Specialist Matching',
  description: 'Get matched with a vetted property management specialist in Harrow — free, within 48 hours. Covering all HA postcodes. ARLA Propertymark and RICS qualified specialists only.',
  alternates: {
    canonical: `${siteConfig.url}/contact/`,
  },
  openGraph: {
    title: 'Contact Property Management Harrow | Free Specialist Matching',
    description: 'Get matched with a vetted property management specialist in Harrow — free, within 48 hours. Covering all HA postcodes. ARLA Propertymark and RICS qualified specialists only.',
    url: `${siteConfig.url}/contact/`,
    type: 'website',
  },
}

export default function Page() {
  return <ContactContent />
}
