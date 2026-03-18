// app/blog/[slug]/page.tsx
'use client';

import { useState, use } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { getArticleBySlug, blogArticles } from '@/data/blog';
import { siteConfig } from '@/data/site';
import type { ContentBlock } from '@/data/blog';

function renderBlock(block: ContentBlock, index: number) {
  switch (block.type) {
    case 'p':
      return (
        <p key={index} className="text-gray-600 leading-relaxed mb-5">
          {block.text || ''}
        </p>
      );
    case 'h2':
      return (
        <h2 key={index} className="text-2xl md:text-3xl font-display font-bold text-gray-900 mt-10 mb-4">
          {block.text || ''}
        </h2>
      );
    case 'h3':
      return (
        <h3 key={index} className="text-xl font-display font-bold text-gray-900 mt-8 mb-3">
          {block.text || ''}
        </h3>
      );
    case 'list':
      return (
        <ul key={index} className="space-y-2 mb-6 pl-1">
          {(block.items || []).map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-600">
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
            <figcaption className="text-xs text-gray-400 mt-2 text-center">{block.alt || ''}</figcaption>
          )}
        </figure>
      );
    case 'cta':
      return (
        <div key={index} className="bg-brand-50 border border-brand-100 rounded-xl p-6 my-8 text-center">
          <p className="font-display font-bold text-gray-900 text-lg mb-2">{block.text || 'Get Your Free Quote'}</p>
          <p className="text-sm text-gray-600 mb-4">Speak to vetted property management specialists in Harrow. Free matching service.</p>
        </div>
      );
    case 'related-articles':
      return (
        <div key={index} className="my-8">
          <h3 className="text-lg font-display font-bold text-gray-900 mb-4">Related Reading</h3>
          <div className="grid gap-3">
            {(block.articles || []).map((rel, i) => (
              <Link
                key={i}
                href={`/blog/${rel.slug}/`}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-brand-200 hover:bg-brand-50 transition-all"
              >
                {(rel.image || '') && (
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={rel.image || ''} alt={rel.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                )}
                <span className="font-medium text-gray-700 text-sm">{rel.title}</span>
              </Link>
            ))}
          </div>
        </div>
      );
    default:
      return null;
  }
}

export default function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { slug } = use(params);
  const article = getArticleBySlug(slug);
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
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/blog/${article.slug}/`,
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main className="flex-grow">

        {/* Hero */}
        <section className="bg-gray-900 text-white relative overflow-hidden">
          {article.featuredImage ? (
            <div className="absolute inset-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={article.featuredImage} alt="" className="w-full h-full object-cover opacity-30" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/40" />
            </div>
          ) : (
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-900/40 via-gray-900/0 to-transparent pointer-events-none" />
          )}
          <div className="container-width py-12 md:py-20 relative z-10">
            <Breadcrumbs items={[{ label: 'Blog', href: '/blog/' }, { label: article.title }]} />
            <div className="max-w-3xl mt-4">
              <div className="flex items-center gap-4 mb-4">
                <span className="inline-flex items-center gap-1.5 text-sm text-brand-300">
                  <Tag className="w-3.5 h-3.5" /> {article.category}
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm text-gray-400">
                  <Calendar className="w-3.5 h-3.5" /> {article.publishDate}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight">
                {article.title}
              </h1>
            </div>
          </div>
        </section>

        <div className="container-width py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Article body */}
            <article className="lg:col-span-2 max-w-none">
              {article.content.map((block, i) => renderBlock(block, i))}
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <h3 className="text-lg font-display font-bold text-gray-900 mb-3">Get a Free Quote</h3>
                  <p className="text-gray-600 text-sm mb-5">
                    Ready to find a property manager? We will match you with a vetted specialist in Harrow at no cost.
                  </p>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="block w-full btn-primary text-center"
                  >
                    Find a Property Manager
                  </button>
                </div>

                {relatedArticles.length > 0 && (
                  <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                    <h3 className="font-bold text-gray-900 text-sm mb-3">More Articles</h3>
                    <div className="space-y-3">
                      {relatedArticles.map(rel => (
                        <Link
                          key={rel.slug}
                          href={`/blog/${rel.slug}/`}
                          className="block text-sm text-gray-600 hover:text-brand-600 transition-colors font-medium"
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

          {/* Back to blog */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <Link href="/blog/" className="inline-flex items-center gap-2 text-brand-600 font-medium hover:underline">
              <ArrowLeft className="w-4 h-4" /> Back to all articles
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
