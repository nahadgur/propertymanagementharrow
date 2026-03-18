// app/location/[city]/page.tsx - TEMPLATE
'use client';

import { useState, use } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MapPin, ArrowRight, CheckCircle, Clock, Shield, Star } from 'lucide-react';
import { services } from '@/data/services';
import { getCityBySlug } from '@/data/locations';
import { FAQS_SERVICES, FAQS_LOCATION } from '@/data/site';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FAQ } from '@/components/FAQ';
import { HeroLeadForm } from '@/components/HeroLeadForm';
import { LeadFormModal } from '@/components/LeadFormModal';
import { PricingSection } from '@/components/PricingSection';
import { NearbyAreasGrid } from '@/components/NearbyAreasGrid';
import { Testimonials } from '@/components/Testimonials';
import { siteConfig } from '@/data/site';
import { cityPageContent } from '@/data/cityContent';

export default function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: citySlug } = use(params);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cityName = getCityBySlug(citySlug);
  if (!cityName) notFound();

  const cityFaqs = [...FAQS_LOCATION, ...FAQS_SERVICES];
  const whyCards = cityPageContent.matchingCards(cityName);
  const introParagraphs = cityPageContent.introParagraphs(cityName);

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: `${siteConfig.name} in ${cityName}`,
    url: `${siteConfig.url}/location/${citySlug}/`,
    description: `Find vetted estate planning specialists in ${cityName}. Free matching service, no obligation.`,
    areaServed: {
      '@type': 'City',
      name: cityName,
      containedInPlace: { '@type': 'AdministrativeArea', name: siteConfig.name.split(' ').pop() },
    },
    serviceType: cityPageContent.schemaServiceTypes,
    priceRange: '\u00a3\u00a3',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main className="flex-grow">

        <section className="bg-gray-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-900/30 via-gray-900/0 to-transparent pointer-events-none" />
          <div className="container-width py-12 md:py-20 relative z-10">
            <Breadcrumbs items={[{ label: 'Locations', href: '/location/' }, { label: cityName }]} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-6">
              <div>
                <div className="inline-flex items-center gap-2 bg-brand-500/20 text-brand-300 px-3 py-1 rounded-full text-sm font-medium mb-6 border border-brand-500/30">
                  <MapPin className="w-4 h-4" /> {siteConfig.name.split(" ").slice(0, -1).join(" ") + " in"} {cityName}
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
                  {siteConfig.name.split(" ").slice(0, -1).join(" ") + " in"} <span className="text-brand-400">{cityName}</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  {`Find vetted estate planning specialists in ${cityName}. Free matching service, no obligation to proceed.`}
                </p>
              </div>
              <div>
                <HeroLeadForm city={cityName} />
              </div>
            </div>
          </div>
        </section>

        <div className="container-width py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">

              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">
                  {cityPageContent.introHeading(cityName)}
                </h2>
                <div className="prose prose-gray max-w-none text-gray-600 space-y-4">
                  {introParagraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">Services Available in {cityName}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {services.map(service => (
                    <Link key={service.id} href={`/services/${service.slug}/${citySlug}/`} className="block group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                      <div className="h-36 overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg font-display font-bold text-gray-900 group-hover:text-brand-600 mb-1.5">{service.title} in {cityName}</h3>
                        <p className="text-sm text-gray-500 mb-3 line-clamp-2">{service.description}</p>
                        <span className="text-brand-600 font-medium text-sm flex items-center">Get free quotes <ArrowRight className="w-4 h-4 ml-1" /></span>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>

              <PricingSection cityName={cityName} />

              <section className="mb-16">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-6">What You Get When We Match You in {cityName}</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {whyCards.map((item, i) => {
                    const icons: Record<string, React.ReactNode> = {
                      Star: <Star className="w-5 h-5" />,
                      Shield: <Shield className="w-5 h-5" />,
                      Clock: <Clock className="w-5 h-5" />,
                      CheckCircle: <CheckCircle className="w-5 h-5" />,
                    };
                    return (
                      <div key={i} className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
                        <div className="bg-brand-100 p-2 rounded-lg text-brand-600 flex-shrink-0 h-fit">{icons[item.iconName] || <Star className="w-5 h-5" />}</div>
                        <div>
                          <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                          <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              <NearbyAreasGrid cityName={cityName} />

              <div className="mb-12"><FAQ faqs={cityFaqs} title={`${siteConfig.name} in ${cityName}: Common Questions`} /></div>

              <section className="mb-16">
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">What Our Clients Are Saying</h2>
                <Testimonials limit={3} />
              </section>
            </div>

            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <h3 className="text-lg font-display font-bold text-gray-900 mb-4">{cityPageContent.sidebarCta(cityName).heading}</h3>
                  <p className="text-gray-600 text-sm mb-6">{cityPageContent.sidebarCta(cityName).description}</p>
                  <button onClick={() => setIsModalOpen(true)} className="block w-full btn-primary text-center">Find a Specialist</button>
                  <div className="mt-6 pt-6 border-t border-gray-100 space-y-4">
                    {[
                      { icon: <Clock className="w-4 h-4 text-brand-500" />, text: "Consultations available this week" },
                      { icon: <Shield className="w-4 h-4 text-brand-500" />, text: "50+ vetted specialists" },
                      { icon: <Star className="w-4 h-4 text-brand-500" />, text: "Qualified and professionally insured" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="bg-brand-100 p-1.5 rounded-full">{item.icon}</div>
                        <span className="text-sm font-medium text-gray-700">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-brand-900 text-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-lg font-display font-bold mb-3">{cityPageContent.sidebarFinance(cityName).heading}</h3>
                  <p className="text-brand-100 text-sm mb-4">{cityPageContent.sidebarFinance(cityName).description}</p>
                  <button onClick={() => setIsModalOpen(true)} className="block w-full bg-white text-brand-900 text-center font-bold py-3 px-6 rounded-xl hover:bg-brand-50 transition-colors text-sm">Check Eligibility</button>
                </div>
              </div>
            </aside>
          </div>

          <div className="bg-brand-900 rounded-2xl p-8 md:p-12 text-center mt-12">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">{cityPageContent.bottomCta(cityName).heading}</h2>
            <p className="text-brand-200 mb-8 max-w-2xl mx-auto">{cityPageContent.bottomCta(cityName).description}</p>
            <button onClick={() => setIsModalOpen(true)} className="bg-white text-brand-900 font-bold text-lg py-4 px-10 rounded-xl hover:bg-brand-50 transition-colors">Get Your Free Quotes</button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
