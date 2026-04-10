import type { Metadata } from 'next'
import { siteConfig } from '@/data/site'
import ToolsContent from './ToolsContent'

export const metadata: Metadata = {
  title: 'Free Property Management Calculators for Harrow Landlords | Property Management Harrow',
  description: 'Free interactive property management calculators — rental yield, management fee comparison, and void cost analysis. Built for Harrow landlords considering professional management.',
  alternates: {
    canonical: `${siteConfig.url}/tools/`,
  },
  openGraph: {
    title: 'Free Property Management Calculators for Harrow Landlords | Property Management Harrow',
    description: 'Free interactive property management calculators — rental yield, management fee comparison, and void cost analysis. Built for Harrow landlords considering professional management.',
    url: `${siteConfig.url}/tools/`,
    type: 'website',
  },
}

export default function Page() {
  return <ToolsContent />
}
