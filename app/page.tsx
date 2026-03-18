// app/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, MapPin, Shield, Star, Clock, Award, Phone, Zap, TreePine, Cloud } from 'lucide-react';
import { services } from '@/data/services';
import { toSlug } from '@/data/locations';
import { pricingTiers, financeInfo } from '@/data/pricing';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { TrustBadges } from '@/components/TrustBadges';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { LeadFormModal } from '@/components/LeadFormModal';
import { siteConfig } from '@/data/site';
import {
  topAreas,
  heroContent,
  problemFraming,
  propertyTypes,
  serviceCardsHeading,
  howItWorks,
  regionalContext,
  areasSection,
  pricingSection,
  trustPoints,
  homepageFaqs,
  faqSectionTitle,
  ctaSection,
  schemaData,
} from '@/data/homepage';

const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield className="w-6 h-6" />,
  TreePine: <TreePine className="w-6 h-6" />,
  Star: <Star className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  Cloud: <Cloud className="w-6 h-6" />,
  Award: <Award className="w-6 h-6" />,
  MapPin: <MapPin className="w-6 h-6" />,
  Phone: <Phone className="w-6 h-6" />,
};

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LegalService',
          '@id': siteConfig.url,
          name: siteConfig.name,
          description: siteConfig.description,
          url: siteConfig.url,
          logo: `${siteConfig.url}/android-chrome-512x512.png`,
          image: `${siteConfig.url}/android-chrome-512x512.png`,
          areaServed: {
            '@type': 'AdministrativeArea',
            name: schemaData.areaServedName,
            containedInPlace: { '@type': 'Country', name: 'United Kingdom' },
          },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: schemaData.offerCatalogName,
            itemListElement: services.map(s => ({
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: s.title },
            })),
          },
          priceRange: '\u00a3\u00a3',
          currenciesAccepted: 'GBP',
          paymentAccepted: 'Cash, Credit Card, Bank Transfer, Finance',
          openingHours: 'Mo-Sa 08:00-18:00',
        }) }}
      />
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main className="flex-grow">

        <Hero
          title={heroContent.title}
          subtitle={heroContent.subtitle}
          image={heroContent.image}
          onOpenModal={() => setIsModalOpen(true)}
        />

        <TrustBadges />

        {/* Problem framing */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                  {problemFraming.heading}
                </h2>
                <div className="space-y-5 text-gray-600 leading-relaxed">
                  {problemFraming.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                <button onClick={() => setIsModalOpen(true)} className="btn-primary mt-8">
                  Get Your Free Quotes
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={problemFraming.images[0].src} alt={problemFraming.images[0].alt} className="rounded-2xl object-cover w-full h-48 col-span-2" loading="lazy" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={problemFraming.images[1].src} alt={problemFraming.images[1].alt} className="rounded-2xl object-cover w-full h-36" loading="lazy" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={problemFraming.images[2].src} alt={problemFraming.images[2].alt} className="rounded-2xl object-cover w-full h-36" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* Property types */}
        <section className="section-padding bg-gray-50">
          <div className="container-width">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">{propertyTypes.heading}</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">{propertyTypes.subheading}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {propertyTypes.cards.map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <div className="bg-brand-100 p-3 rounded-xl text-brand-600 w-fit mb-4">{iconMap[item.iconName] || <Award className="w-6 h-6" />}</div>
                  <h3 className="font-display font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service cards */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">{serviceCardsHeading.title}</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">{serviceCardsHeading.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map(service => (
                <Link key={service.id} href={`/services/${service.slug}/`} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="h-44 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={service.image} alt={`${service.title} specialists in London`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-display font-bold text-gray-900 group-hover:text-brand-600 mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-500 mb-4 line-clamp-2">{service.description}</p>
                    <span className="text-brand-600 font-medium text-sm flex items-center">
                      {serviceCardsHeading.linkText} <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="section-padding bg-gray-50">
          <div className="container-width">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">{howItWorks.heading}</h2>
              <p className="text-gray-600 max-w-xl mx-auto">{howItWorks.subheading}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {howItWorks.steps.map(item => (
                <div key={item.step} className="text-center">
                  <div className="w-14 h-14 bg-brand-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-5">{item.step}</div>
                  <h3 className="text-lg font-display font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <button onClick={() => setIsModalOpen(true)} className="btn-primary text-lg !px-8 !py-4">
                Start Your Free Enquiry
              </button>
              <p className="text-gray-500 text-sm mt-3">Completely free. No strings. No obligation.</p>
            </div>
          </div>
        </section>

        {/* Regional context */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                  {regionalContext.heading}
                </h2>
                <div className="space-y-5 text-gray-600 leading-relaxed">
                  {regionalContext.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                {regionalContext.regions.map((item, i) => (
                  <div key={i} className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
                    <MapPin className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{item.label}: {item.towns}</p>
                      <p className="text-gray-600 text-sm mt-1">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Areas */}
        <section className="section-padding bg-gray-50">
          <div className="container-width">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">{areasSection.heading}</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">{areasSection.subheading}</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-8">
              {topAreas.map(area => (
                <Link
                  key={area}
                  href={`/location/${toSlug(area)}/`}
                  className="group flex items-center gap-2 p-3 bg-white rounded-xl border border-gray-100 hover:border-brand-300 hover:bg-brand-50 transition-all shadow-sm"
                >
                  <MapPin className="w-4 h-4 text-brand-500 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700 group-hover:text-brand-700">{area}</span>
                </Link>
              ))}
            </div>
            <div className="text-center">
              <Link href="/location/" className="btn-secondary">
                {areasSection.browseAllText}
              </Link>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">{pricingSection.heading}</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">{pricingSection.subheading}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {pricingTiers.map(tier => (
                <div key={tier.slug} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-display font-bold text-gray-900 mb-2">{tier.treatment}</h3>
                  <p className="text-2xl font-bold text-brand-600 mb-1">
                    &pound;{tier.priceFrom.toLocaleString()} <span className="text-base text-gray-400 font-normal">to</span> &pound;{tier.priceTo.toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-500 mb-3">{tier.serviceIncludes} &middot; {tier.typicalDuration}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{tier.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-brand-900 rounded-2xl p-6 md:p-10 text-white text-center">
              <h3 className="text-2xl font-display font-bold mb-2">{pricingSection.financeHeading}</h3>
              <p className="text-brand-200 text-sm mb-6 max-w-xl mx-auto">{pricingSection.financeSubheading}</p>
              <button onClick={() => setIsModalOpen(true)} className="bg-white text-brand-900 font-bold py-3 px-8 rounded-xl hover:bg-brand-50 transition-colors">
                Check Finance Availability
              </button>
            </div>
          </div>
        </section>

        {/* Trust points */}
        <section className="section-padding bg-gray-50">
          <div className="container-width">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">{trustPoints.heading}</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">{trustPoints.subheading}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trustPoints.points.map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <div className="bg-brand-100 p-3 rounded-xl text-brand-600 w-fit mb-4">{iconMap[item.iconName] || <Award className="w-6 h-6" />}</div>
                  <h3 className="font-display font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Testimonials />

        {/* FAQ */}
        <section className="section-padding bg-gray-50">
          <div className="container-width max-w-3xl">
            <FAQ faqs={homepageFaqs} title={faqSectionTitle} />
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-brand-900 text-white">
          <div className="container-width text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{ctaSection.heading}</h2>
            <p className="text-brand-200 max-w-2xl mx-auto mb-8">{ctaSection.subheading}</p>
            <button onClick={() => setIsModalOpen(true)} className="bg-white text-brand-900 font-bold text-lg py-4 px-10 rounded-xl hover:bg-brand-50 transition-colors">
              Get Free Quotes Now
            </button>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
