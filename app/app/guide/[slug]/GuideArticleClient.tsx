// app/guide/[slug]/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Clock, RefreshCw, CheckCircle, ArrowRight, AlertTriangle, Info } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { HomepageTrustBar } from '@/components/HomepageTrustBar';
import { TableOfContents } from '@/components/TableOfContents';
import { getGuideBySlug, guides, clusterLabels } from '@/data/guides';
import { getServiceBySlug } from '@/data/services';
import { siteConfig } from '@/data/site';
import type { GuideBlock } from '@/data/guides';

function renderBlock(block: GuideBlock, index: number, openModal: () => void) {
  switch (block.type) {
    case 'p':
      return (
        <p key={index} className="text-taupe leading-relaxed mb-5 text-[15px]">
          {block.text}
        </p>
      );
    case 'h2':
      return (
        <h2
          key={index}
          id={block.id}
          className="text-2xl md:text-3xl font-display font-bold text-brand-900 mt-12 mb-4 scroll-mt-24"
        >
          {block.text}
        </h2>
      );
    case 'h3':
      return (
        <h3 key={index} className="text-xl font-display font-bold text-brand-900 mt-8 mb-3">
          {block.text}
        </h3>
      );
    case 'list':
      return (
        <ul key={index} className="space-y-2.5 mb-6">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-taupe text-[15px]">
              <CheckCircle className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case 'numlist':
      return (
        <ol key={index} className="space-y-3 mb-6">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-taupe text-[15px]">
              <span className="w-6 h-6 rounded-full bg-brand-500 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                {i + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      );
    case 'warning':
      return (
        <div key={index} className="bg-warn-bg border border-warn-border rounded-xl p-5 my-6 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-warn-text flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-warn-text text-sm mb-1">{block.heading}</p>
            <p className="text-taupe text-sm leading-relaxed">{block.body}</p>
          </div>
        </div>
      );
    case 'info':
      return (
        <div key={index} className="bg-brand-50 border border-brand-100 rounded-xl p-5 my-6 flex items-start gap-3">
          <Info className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-brand-900 text-sm mb-1">{block.heading}</p>
            <p className="text-taupe text-sm leading-relaxed">{block.body}</p>
          </div>
        </div>
      );
    case 'table':
      return (
        <div key={index} className="my-7 overflow-x-auto">
          {block.heading && (
            <p className="text-sm font-bold text-brand-900 mb-3">{block.heading}</p>
          )}
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-brand-900">
                {block.headers.map((h, i) => (
                  <th key={i} className="text-left px-4 py-3 text-sand text-xs font-bold uppercase tracking-wide border-r border-brand-800 last:border-r-0">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-cream'}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-4 py-3 text-brand-900 border-t border-sand-mid/30 text-[13px] align-top">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case 'cta':
      return (
        <div key={index} className="bg-brand-900 rounded-2xl p-7 my-8 text-center">
          <p className="font-display font-bold text-sand text-xl mb-2">{block.heading}</p>
          <p className="text-brand-200 text-sm mb-5 leading-relaxed">{block.body}</p>
          <button
            onClick={openModal}
            className="bg-white text-brand-900 font-bold py-3 px-7 rounded-xl hover:bg-brand-50 transition-colors text-sm"
          >
            Get My Free Assessment
          </button>
        </div>
      );
    case 'related-services':
    case 'related-guides':
      return null; // handled in sidebar
    default:
      return null;
  }
}

export default function GuideArticleClient({ params }: { params: { slug: string } }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const guide = getGuideBySlug(params.slug);
  if (!guide) notFound();

  const relatedGuideObjects = (guide.relatedGuides ?? [])
    .map(s => guides.find(g => g.slug === s))
    .filter(Boolean) as typeof guides;

  const relatedServiceObjects = (guide.relatedServices ?? [])
    .map(s => getServiceBySlug(s))
    .filter(Boolean);

  const moreInCluster = guides
    .filter(g => g.slug !== guide.slug && g.cluster === guide.cluster)
    .slice(0, 3);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.metaTitle,
    description: guide.metaDescription,
    dateModified: guide.lastUpdated,
    url: `${siteConfig.url}/guide/${guide.slug}/`,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/guide/${guide.slug}/`,
    },
  };

  // Build FAQ schema from h2 + following paragraphs
  const faqItems: { q: string; a: string }[] = [];
  let lastH2 = '';
  guide.content.forEach(block => {
    if (block.type === 'h2') { lastH2 = block.text; }
    if (block.type === 'p' && lastH2) {
      faqItems.push({ q: lastH2, a: block.text });
      lastH2 = '';
    }
  });
  const faqSchema = faqItems.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  } : null;

  const formattedDate = new Date(guide.lastUpdated).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric',
  });

  // Inject JSON-LD via useEffect to prevent SSR+hydration duplication.
  // dangerouslySetInnerHTML on <script> in a 'use client' page outputs the tag
  // once server-side and again on client hydration → duplicate FAQPage in GSC.
  useEffect(() => {
    const injected: HTMLScriptElement[] = [];
    const addSchema = (schema: object) => {
      const el = document.createElement('script');
      el.type = 'application/ld+json';
      el.textContent = JSON.stringify(schema);
      document.head.appendChild(el);
      injected.push(el);
    };
    addSchema(articleSchema);
    if (faqSchema) addSchema(faqSchema);
    return () => injected.forEach(el => el.remove());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [guide.slug]);

  return (
    <>
      <meta name="description" content={guide.metaDescription} />
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main className="flex-grow">

        {/* HERO */}
        <section className="bg-brand-950 text-white py-12 md:py-16">
          <div className="container-width">
            <Breadcrumbs items={[
              { label: 'Knowledge Hub', href: '/guide/' },
              { label: clusterLabels[guide.cluster], href: `/guide/?cluster=${guide.cluster}` },
              { label: guide.title },
            ]} />
            <div className="max-w-3xl mt-6">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-brand-200 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide mb-5">
                {clusterLabels[guide.cluster]}
              </div>
              <h1 className="text-3xl md:text-4xl font-display font-bold tracking-tight leading-[1.1] mb-5">
                {guide.title}
              </h1>
              {/* Meta row */}
              <div className="flex flex-wrap items-center gap-5 text-sm text-brand-300">
                <span className="flex items-center gap-1.5">
                  <RefreshCw className="w-3.5 h-3.5" />
                  Last reviewed: {formattedDate}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {guide.readingMins} min read
                </span>
              </div>
            </div>
          </div>
        </section>

        <HomepageTrustBar />

        {/* BODY */}
        <div className="container-width py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 items-start">

            {/* ARTICLE */}
            <article>
              {/* Content */}
              {guide.content.map((block, i) => renderBlock(block, i, () => setIsModalOpen(true)))}

              {/* Back link */}
              <div className="mt-12 pt-8 border-t border-sand-mid/40">
                <Link href="/guide/" className="inline-flex items-center gap-2 text-brand-500 font-medium hover:underline text-sm">
                  <ArrowLeft className="w-4 h-4" /> Back to Knowledge Hub
                </Link>
              </div>
            </article>

            {/* SIDEBAR */}
            <aside className="space-y-5">
              <div className="sticky top-24 space-y-5">

                {/* ToC */}
                <TableOfContents content={guide.content} />

                {/* Lead CTA */}
                <div className="bg-white border border-sand-mid/40 rounded-xl p-5 shadow-sm">
                  <h3 className="font-display font-bold text-brand-900 mb-2 text-[15px]">Get Free Assessment</h3>
                  <p className="text-taupe text-xs mb-4 leading-relaxed">Speak to a specialist. We assess your situation and explain your options — free, no obligation.</p>
                  <button onClick={() => setIsModalOpen(true)} className="w-full btn-primary justify-center !text-[13px] !py-3">
                    Talk to a Specialist <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Related services */}
                {relatedServiceObjects.length > 0 && (
                  <div className="bg-cream border border-sand-mid/40 rounded-xl p-5">
                    <h3 className="text-xs font-bold text-taupe uppercase tracking-widest mb-3">Related Services</h3>
                    <div className="space-y-2">
                      {relatedServiceObjects.map(s => s && (
                        <Link
                          key={s.id}
                          href={`/services/${s.slug}/`}
                          className="flex items-center gap-2 text-sm text-brand-900 hover:text-brand-500 transition-colors font-medium"
                        >
                          <ArrowRight className="w-3 h-3 text-brand-400 flex-shrink-0" />
                          {s.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Related guides */}
                {relatedGuideObjects.length > 0 && (
                  <div className="bg-cream border border-sand-mid/40 rounded-xl p-5">
                    <h3 className="text-xs font-bold text-taupe uppercase tracking-widest mb-3">Related Guides</h3>
                    <div className="space-y-2">
                      {relatedGuideObjects.map(g => (
                        <Link
                          key={g.slug}
                          href={`/guide/${g.slug}/`}
                          className="block text-sm text-brand-900 hover:text-brand-500 transition-colors font-medium leading-snug"
                        >
                          {g.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* More in cluster */}
                {moreInCluster.length > 0 && (
                  <div className="bg-cream border border-sand-mid/40 rounded-xl p-5">
                    <h3 className="text-xs font-bold text-taupe uppercase tracking-widest mb-3">
                      More in {clusterLabels[guide.cluster]}
                    </h3>
                    <div className="space-y-2">
                      {moreInCluster.map(g => (
                        <Link
                          key={g.slug}
                          href={`/guide/${g.slug}/`}
                          className="block text-sm text-brand-900 hover:text-brand-500 transition-colors font-medium leading-snug"
                        >
                          {g.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
