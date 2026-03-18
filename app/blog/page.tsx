// app/blog/page.tsx
'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { blogArticles } from '@/data/blog';
import { siteConfig } from '@/data/site';

export default function BlogIndexPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = useMemo(() => {
    const cats = Array.from(new Set(blogArticles.map(a => a.category)));
    return ['All', ...cats];
  }, []);

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return blogArticles;
    return blogArticles.filter(a => a.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main className="flex-grow">

        {/* Hero */}
        <section className="bg-gray-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-900/40 via-gray-900/0 to-transparent pointer-events-none" />
          <div className="container-width py-16 md:py-24 relative z-10">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 bg-brand-500/20 text-brand-300 text-xs font-bold uppercase tracking-wider rounded-full mb-4 border border-brand-500/30">
                Blog
              </span>
              <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4">
                {siteConfig.name} Blog
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Guides, tips, and advice on working with writers, briefing projects, and getting the most from writing services in London.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-width">

            {blogArticles.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg">No articles yet. Check back soon for helpful guides and advice.</p>
              </div>
            ) : (
              <>
                {/* Category filter */}
                {categories.length > 2 && (
                  <div className="flex flex-wrap gap-2 mb-10">
                    {categories.map(cat => (
                      <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                          activeCategory === cat
                            ? 'bg-brand-500 text-white'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                )}

                {/* Article grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filtered.map(article => (
                    <Link
                      key={article.slug}
                      href={`/blog/${article.slug}/`}
                      className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
                    >
                      <div className="h-48 overflow-hidden bg-gray-100">
                        {article.featuredImage ? (
                          /* eslint-disable-next-line @next/next/no-img-element */
                          <img
                            src={article.featuredImage}
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-brand-200 via-brand-100 to-brand-50" />
                        )}
                      </div>
                      <div className="p-5">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-xs font-semibold text-brand-600 bg-brand-50 px-2.5 py-0.5 rounded-full">
                            {article.category}
                          </span>
                          <span className="text-xs text-gray-400">{article.publishDate}</span>
                        </div>
                        <h2 className="text-lg font-display font-bold text-gray-900 group-hover:text-brand-600 mb-2 line-clamp-2">
                          {article.title}
                        </h2>
                        <p className="text-sm text-gray-500 line-clamp-3">{article.excerpt}</p>
                      </div>
                    </Link>
                  ))}
                </div>

                {filtered.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-gray-500">No articles in this category yet.</p>
                  </div>
                )}
              </>
            )}

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
