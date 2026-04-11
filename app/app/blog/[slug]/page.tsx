// app/blog/[slug]/page.tsx — server component wrapper for SEO metadata
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getArticleBySlug, blogArticles } from '@/data/blog';
import { siteConfig } from '@/data/site';
import BlogArticleClient from './BlogArticleClient';

export const dynamic = 'force-static';

export async function generateStaticParams() {
  return blogArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);
  if (!article) return { title: 'Article not found' };

  const url = `${siteConfig.url}/blog/${article.slug}/`;
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: article.metaTitle,
      description: article.metaDescription,
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();
  return <BlogArticleClient params={params} />;
}
