import type { Metadata } from 'next'
import { siteConfig } from '@/data/site'
import ServicesContent from './ServicesContent'

export const metadata: Metadata = {
  title: 'Property Management Services for Harrow Landlords | Property Management Harrow',
  description: 'Specialist property management services — lettings management, tenant sourcing, rent collection, property maintenance, and compliance management for Harrow landlords. Free matching.',
  alternates: {
    canonical: `${siteConfig.url}/services/`,
  },
  openGraph: {
    title: 'Property Management Services for Harrow Landlords | Property Management Harrow',
    description: 'Specialist property management services — lettings management, tenant sourcing, rent collection, property maintenance, and compliance management for Harrow landlords. Free matching.',
    url: `${siteConfig.url}/services/`,
    type: 'website',
  },
}

export default function Page() {
  return <ServicesContent />
}
