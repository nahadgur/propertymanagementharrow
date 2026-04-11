// app/tools/corporation-tax-calculator/page.tsx — server wrapper for SEO metadata
import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import CorporationTaxCalculatorClient from './CorporationTaxCalculatorClient';

export const dynamic = 'force-static';

const title = 'Corporation Tax Late Filing Penalty Calculator 2025/26 — CT600 + Companies House';
const description = 'Calculate your limited company\u2019s late filing penalties from both HMRC (CT600) and Companies House in one tool. Includes late payment interest and strike-off risk assessment for 2025/26.';
const url = `${siteConfig.url}/tools/corporation-tax-calculator/`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'website' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <CorporationTaxCalculatorClient />;
}
