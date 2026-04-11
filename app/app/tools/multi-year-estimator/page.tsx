// app/tools/multi-year-estimator/page.tsx — server wrapper for SEO metadata
import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import MultiYearEstimatorClient from './MultiYearEstimatorClient';

export const dynamic = 'force-static';

const title = 'Multi-Year Late Tax Return Calculator — Total HMRC Liability Estimator';
const description = 'Behind on multiple years of Self Assessment? Enter each year\u2019s estimated tax and see your total penalty, interest and tax liability across all years in one place.';
const url = `${siteConfig.url}/tools/multi-year-estimator/`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'website' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <MultiYearEstimatorClient />;
}
