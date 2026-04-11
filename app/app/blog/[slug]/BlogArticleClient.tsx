// app/blog/[slug]/page.tsx
'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag, Shield } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { HomepageTrustBar } from '@/components/HomepageTrustBar';
import { getArticleBySlug, blogArticles } from '@/data/blog';
import { siteConfig } from '@/data/site';
import type { ContentBlock } from '@/data/blog';

function renderBlock(block: ContentBlock, index: number) {
  switch (block.type) {
    case 'p':
      return (
        <p key={index} className="text-taupe leading-relaxed mb-5 text-[15px]">
          {block.text || ''}
        </p>
      );
    case 'h2':
      return (
        <h2 key={index} className="text-2xl md:text-3xl font-display font-bold text-brand-900 mt-10 mb-4">
          {block.text || ''}
        </h2>
      );
    case 'h3':
      return (
        <h3 key={index} className="text-xl font-display font-bold text-brand-900 mt-8 mb-3">
          {block.text || ''}
        </h3>
      );
    case 'list':
      return (
        <ul key={index} className="space-y-2 mb-6 pl-1">
          {(block.items || []).map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-taupe text-[15px]">
              <span className="w-1.5 h-1.5 bg-brand-500 rounded-full flex-shrink-0 mt-2" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case 'image':
      return (
        <figure key={index} className="my-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={block.src || ''}
            alt={block.alt || ''}
            className="w-full rounded-xl object-cover"
            loading="lazy"
          />
          {(block.alt || '') && (
            <figcaption className="text-xs text-taupe mt-2 text-center">{block.alt || ''}</figcaption>
          )}
        </figure>
      );
    case 'cta':
      return (
        <div key={index} className="bg-brand-50 border border-brand-100 rounded-xl p-6 my-8 text-center">
          <p className="font-display font-bold text-brand-900 text-lg mb-2">{block.text || 'Get Your Free Assessment'}</p>
          <p className="text-sm text-taupe mb-4">Speak to vetted specialists in your area. Free, no obligation.</p>
        </div>
      );
    case 'related-articles':
      return (
        <div key={index} className="my-8">
          <h3 className="text-lg font-display font-bold text-brand-900 mb-4">Related Reading</h3>
          <div className="grid gap-3">
            {(block.articles || []).map((rel, i) => (
              <Link
                key={i}
                href={`/blog/${rel.slug}/`}
                className="flex items-center gap-4 p-4 bg-cream border border-sand-mid/40 rounded-xl hover:border-brand-300 hover:bg-brand-50 transition-all"
              >
                {(rel.image || '') && (
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={rel.image || ''} alt={rel.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                )}
                <span className="font-medium text-brand-900 text-sm">{rel.title}</span>
              </Link>
            ))}
          </div>
        </div>
      );
    default:
      return null;
  }
}

export default function BlogArticleClient({ params }: { params: { slug: string } }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const relatedArticles = blogArticles
    .filter(a => a.slug !== article.slug && a.category === article.category)
    .slice(0, 3);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.metaTitle,
    description: article.metaDescription,
    image: article.featuredImage || undefined,
    datePublished: article.publishDate,
    publisher: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.url },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${siteConfig.url}/blog/${article.slug}/` },
    author: {
      '@type': 'Person',
      name: siteConfig.name,
      description: 'Chartered Certified Accountant with 15 years\u2019 experience in late Self Assessment filings, HMRC penalty appeals, and tax compliance. ICAEW member and HMRC-registered agent.',
      
      
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main className="flex-grow">

        {/* HERO */}
        <section className="bg-brand-950 text-white relative overflow-hidden">
          {article.featuredImage && (
            <div className="absolute inset-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={article.featuredImage} alt="" className="w-full h-full object-cover opacity-20" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/90 to-brand-950/70" />
            </div>
          )}
          <div className="container-width py-12 md:py-18 relative z-10">
            <Breadcrumbs items={[{ label: 'Blog', href: '/blog/' }, { label: article.title }]} />
            <div className="max-w-3xl mt-5">
              <div className="flex flex-wrap items-center gap-4 mb-5">
                <span className="inline-flex items-center gap-1.5 text-sm text-brand-300">
                  <Tag className="w-3.5 h-3.5" /> {article.category}
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm text-brand-400">
                  <Calendar className="w-3.5 h-3.5" /> {article.publishDate}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight leading-[1.1]">
                {article.title}
              </h1>
            </div>
          </div>
        </section>

        <HomepageTrustBar />

        <div className="container-width py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* ARTICLE BODY */}
            <article className="lg:col-span-2 max-w-none">
              {article.content.map((block, i) => renderBlock(block, i))}
            </article>

            {/* SIDEBAR */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-5">

                <div className="bg-white p-6 rounded-2xl border border-sand-mid/40 shadow-sm">
                  <h3 className="font-display font-bold text-brand-900 mb-2">Get Free Assessment</h3>
                  <p className="text-taupe text-sm mb-5">Ready to get started? We will match you with vetted local specialists at no cost.</p>
                  <button onClick={() => setIsModalOpen(true)} className="block w-full btn-primary text-center justify-center">
                    Find a Specialist
                  </button>
                </div>

                {relatedArticles.length > 0 && (
                  <div className="bg-cream p-5 rounded-2xl border border-sand-mid/40">
                    <h3 className="font-bold text-brand-900 text-sm mb-3">More Articles</h3>
                    <div className="space-y-3">
                      {relatedArticles.map(rel => (
                        <Link
                          key={rel.slug}
                          href={`/blog/${rel.slug}/`}
                          className="block text-sm text-taupe hover:text-brand-500 transition-colors font-medium leading-snug"
                        >
                          {rel.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </aside>
          </div>

          <div className="mt-12 pt-8 border-t border-sand-mid/40">
            <Link href="/blog/" className="inline-flex items-center gap-2 text-brand-500 font-medium hover:underline text-sm">
              <ArrowLeft className="w-4 h-4" /> Back to all articles
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
