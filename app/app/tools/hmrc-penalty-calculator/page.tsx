// app/tools/hmrc-penalty-calculator/page.tsx — server wrapper for SEO metadata
import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import PenaltyCalculatorClient from './PenaltyCalculatorClient';

export const dynamic = 'force-static';

const title = 'HMRC Penalty Calculator 2025/26 — Exact Late Filing Fine + Interest';
const description = 'Free HMRC late filing penalty calculator. Enter your tax owed and how late you are to see your exact fine, daily charges and interest at the current 8.25% rate. Updated for 2025/26.';
const url = `${siteConfig.url}/tools/hmrc-penalty-calculator/`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'website' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <PenaltyCalculatorClient />;
}
