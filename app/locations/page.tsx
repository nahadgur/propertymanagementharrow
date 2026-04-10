import type { Metadata } from 'next'
import { siteConfig } from '@/data/site'
import LocationsContent from './LocationsContent'

export const metadata: Metadata = {
  title: 'Property Tax Accountants — All Harrow Locations & Postcodes | Property Accountants Harrow',
  description: 'Specialist property tax accountants covering all Harrow postcodes — HA1 to HA9 — including Stanmore, Pinner, Wealdstone, Edgware, Kenton and surrounding areas. Free matching.',
  alternates: {
    canonical: `${siteConfig.url}/locations/`,
  },
  openGraph: {
    title: 'Property Tax Accountants — All Harrow Locations & Postcodes | Property Accountants Harrow',
    description: 'Specialist property tax accountants covering all Harrow postcodes — HA1 to HA9 — including Stanmore, Pinner, Wealdstone, Edgware, Kenton and surrounding areas. Free matching.',
    url: `${siteConfig.url}/locations/`,
    type: 'website',
  },
}

export default function Page() {
  return <LocationsContent />
}
