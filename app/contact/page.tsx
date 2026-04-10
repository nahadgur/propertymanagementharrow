import type { Metadata } from 'next'
import { siteConfig } from '@/data/site'
import ContactContent from './ContactContent'

export const metadata: Metadata = {
  title: 'Contact Property Accountants Harrow | Free Specialist Matching',
  description: 'Get matched with a vetted property tax accountant in Harrow — free, within 48 hours. Covering all HA postcodes. ACCA and ICAEW certified specialists only.',
  alternates: {
    canonical: `${siteConfig.url}/contact/`,
  },
  openGraph: {
    title: 'Contact Property Accountants Harrow | Free Specialist Matching',
    description: 'Get matched with a vetted property tax accountant in Harrow — free, within 48 hours. Covering all HA postcodes. ACCA and ICAEW certified specialists only.',
    url: `${siteConfig.url}/contact/`,
    type: 'website',
  },
}

export default function Page() {
  return <ContactContent />
}
