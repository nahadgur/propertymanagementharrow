import type { Metadata } from 'next'
import { siteConfig } from '@/data/site'
import ExpensesGuideContent from './ExpensesGuideContent'

export const metadata: Metadata = {
  title: 'Allowable Expenses for UK Landlords: The Definitive List (2025/26) | Property Accountants Harrow',
  description: 'Revenue vs capital expenses, the full allowable expenses table with HMRC PIM references, Section 24 treatment, replacement furniture relief, and what you cannot claim.',
  alternates: {
    canonical: `${siteConfig.url}/guides/allowable-expenses-uk-landlords/`,
  },
  openGraph: {
    title: 'Allowable Expenses for UK Landlords: The Definitive List (2025/26) | Property Accountants Harrow',
    description: 'Revenue vs capital expenses, the full allowable expenses table with HMRC PIM references, Section 24 treatment, replacement furniture relief, and what you cannot claim.',
    url: `${siteConfig.url}/guides/allowable-expenses-uk-landlords/`,
    type: 'website',
  },
}

export default function Page() {
  return <ExpensesGuideContent />
}
