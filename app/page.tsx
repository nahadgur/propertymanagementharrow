import type { Metadata } from 'next'
import HomePageContent from '@/components/HomePageContent'

export const metadata: Metadata = {
  title: 'Property Accountants Harrow | Vetted Property Tax Specialists',
  description:
    'Connect with vetted ACCA and ICAEW certified property tax accountants in Harrow. Specialists in Section 24 mitigation, SPV incorporation, capital gains tax planning, and inheritance tax for property investors.',
  alternates: {
    canonical: 'https://www.propertyaccountantsharrow.co.uk/',
  },
}

export default function Page() {
  return <HomePageContent />
}
