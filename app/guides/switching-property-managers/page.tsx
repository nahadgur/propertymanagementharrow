import type { Metadata } from 'next'
import { siteConfig } from '@/data/site'
import SwitchingManagersGuideContent from './SwitchingManagersGuideContent'

export const metadata: Metadata = {
  title: 'How to Switch Property Managers Without Disrupting Your Tenants | Property Management Harrow',
  description: 'Step-by-step guide to switching property managers — reviewing agreements, serving notice, the handover process, tenant communication, and what to transfer to your new agent.',
  alternates: {
    canonical: `${siteConfig.url}/guides/switching-property-managers/`,
  },
  openGraph: {
    title: 'How to Switch Property Managers Without Disrupting Your Tenants | Property Management Harrow',
    description: 'Step-by-step guide to switching property managers — reviewing agreements, serving notice, the handover process, tenant communication, and what to transfer to your new agent.',
    url: `${siteConfig.url}/guides/switching-property-managers/`,
    type: 'website',
  },
}

export default function Page() {
  return <SwitchingManagersGuideContent />
}
