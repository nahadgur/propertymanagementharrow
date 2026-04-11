// app/guide/[slug]/page.tsx — server component wrapper for SEO metadata
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getGuideBySlug, guides } from '@/data/guides';
import { siteConfig } from '@/data/site';
import GuideArticleClient from './GuideArticleClient';

export const dynamic = 'force-static';

export async function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const guide = getGuideBySlug(params.slug);
  if (!guide) return { title: 'Guide not found' };

  const url = `${siteConfig.url}/guide/${guide.slug}/`;
  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: guide.metaTitle,
      description: guide.metaDescription,
      url,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: guide.metaTitle,
      description: guide.metaDescription,
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const guide = getGuideBySlug(params.slug);
  if (!guide) notFound();
  return <GuideArticleClient params={params} />;
}
