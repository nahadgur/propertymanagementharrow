// app/tools/appeal-deadline-checker/page.tsx — server wrapper for SEO metadata
import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import AppealDeadlineCheckerClient from './AppealDeadlineCheckerClient';

export const dynamic = 'force-static';

const title = 'HMRC Penalty Appeal Deadline Checker — Is Your 30-Day Window Still Open?';
const description = 'Enter the date on your HMRC penalty notice and find out instantly whether your 30-day appeal window is still open, when it closes, and exactly what to do next.';
const url = `${siteConfig.url}/tools/appeal-deadline-checker/`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'website' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <AppealDeadlineCheckerClient />;
}
