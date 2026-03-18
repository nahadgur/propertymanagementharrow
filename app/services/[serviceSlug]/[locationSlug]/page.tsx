// app/services/[serviceSlug]/[locationSlug]/page.tsx - TEMPLATE
'use client';

import { useState, use } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, MapPin, Star, Clock, Shield, Award, Users } from 'lucide-react';
import { services, getServiceBySlug } from '@/data/services';
import { LOCATIONS, getCityBySlug } from '@/data/locations';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroLeadForm } from '@/components/HeroLeadForm';
import { FAQ } from '@/components/FAQ';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Testimonials } from '@/components/Testimonials';
import { LeadFormModal } from '@/components/LeadFormModal';
import { PricingSection } from '@/components/PricingSection';
import { NearbyAreasGrid } from '@/components/NearbyAreasGrid';
import { siteConfig } from '@/data/site';
import { serviceLocationContent } from '@/data/serviceLocationContent';


export default function ServiceLocationPage({ params }: { params: Promise<{ serviceSlug: string; locationSlug: string }> }) {
  const { serviceSlug, locationSlug } = use(params);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const service = getServiceBySlug(serviceSlug);
  const cityName = getCityBySlug(locationSlug);
  if (!service || !cityName) notFound();

  const allCities = Object.values(LOCATIONS).flat();
  const content = serviceLocationContent[service.id] || serviceLocationContent[services[0].id];
  const intro = content.intro(cityName);
  const steps = content.steps(cityName);
  const whyPoints = content.whyPoints(cityName);

  const benefits = [
    { icon: <Award className="w-6 h-6" />, title: 'Vetted Estate Planning Specialists', desc: `Every estate planning specialist in our network has been vetted on portfolio quality and client references before receiving any referrals.` },
    { icon: <Clock className="w-6 h-6" />, title: 'Response Within 24 Hours', desc: `Most estate planning specialists in our network respond within 24 hours and can arrange a free initial conversation to discuss your project.` },
    { icon: <Shield className="w-6 h-6" />, title: 'Vetted and Insured', desc: `Professional indemnity insurance is required from every estate planning specialist before we refer any enquiries.` },
    { icon: <Users className="w-6 h-6" />, title: 'Matched to Your Brief', desc: `We connect you with estate planning specialists who have specific experience in your discipline and sector, not a generic list of whoever is available.` },
  ];

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: `${service.title} in ${cityName}`,
    url: `${siteConfig.url}/services/${service.slug}/${locationSlug}/`,
    description: `Find vetted estate planning specialists in ${cityName}. Free matching service, no obligation.`,
    areaServed: {
      '@type': 'City',
      name: cityName,
      containedInPlace: { '@type': 'AdministrativeArea', name: siteConfig.name.split(' ').pop() },
    },
    serviceType: service.title,
    priceRange: '\u00a3\u00a3',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main className="flex-grow">
        <section className="bg-gray-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={service.image} alt="" className="w-full h-full object-cover opacity-50" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/70 to-gray-900/30" />
          </div>
          <div className="container-width py-12 md:py-20 relative z-10">
            <Breadcrumbs items={[
              { label: 'Services', href: '/services/' },
              { label: service.title, href: `/services/${service.slug}/` },
              { label: cityName }
            ]} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-6">
              <div>
                <div className="inline-flex items-center gap-2 bg-brand-500/20 text-brand-300 px-3 py-1 rounded-full text-sm font-medium mb-6 border border-brand-500/30">
                  <MapPin className="w-4 h-4" /> Vetted Specialists in {cityName}
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
                  {service.title} in <span className="text-brand-400">{cityName}</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  {service.title.toLowerCase()} professionals available in {cityName}. Free matching service, no obligation to proceed.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    `${service.title} specialists in ${cityName}, verified and active`,
                    'Up to three matched estate planning specialists, each providing a free initial conversation',
                    'Qualified, insured, and experienced with estate planning',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-brand-400 flex-shrink-0" />
                      <span className="text-lg">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex text-yellow-400">{[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}</div>
                  <span>Highly rated by London clients</span>
                </div>
              </div>
              <div>
                <HeroLeadForm city={cityName} service={service.title} />
              </div>
            </div>
          </div>
        </section>

        <div className="container-width py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
                <div className="bg-brand-100 p-2 rounded-lg text-brand-600">{benefit.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">

              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">
                  {service.title} in {cityName}: What to Expect
                </h2>
                <div className="prose prose-gray max-w-none text-gray-600 space-y-4">
                  {intro.map((p, i) => <p key={i}>{p}</p>)}
                </div>
              </section>

              <NearbyAreasGrid cityName={cityName} serviceSlug={service.slug} serviceName={service.title} />

              <section className="mb-12">
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">How {service.title} Works in {cityName}</h2>
                <div className="space-y-4">
                  {steps.map((step, i) => (
                    <div key={i} className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                      <div className="flex-shrink-0 w-8 h-8 bg-brand-500 text-white rounded-full flex items-center justify-center font-bold text-sm">{i + 1}</div>
                      <p className="text-gray-700 font-medium pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </section>

              <PricingSection cityName={cityName} serviceId={service.id} serviceName={service.title} />

              <section className="mb-12">
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">Why Get {service.title} in {cityName} Through Us?</h3>
                <div className="space-y-3">
                  {whyPoints.map((point, i) => (
                    <div key={i} className="flex items-start gap-3 bg-brand-50 p-4 rounded-xl border border-brand-100">
                      <CheckCircle className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-800 font-medium text-sm">{point}</span>
                    </div>
                  ))}
                </div>
              </section>

              {service.faqs.length > 0 && (
                <div className="mb-12">
                  <FAQ faqs={service.faqs} title={`${service.title} in ${cityName}: Common Questions`} />
                </div>
              )}

              <section className="mt-12 mb-12">
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">What Our Clients Are Saying</h2>
                <Testimonials limit={2} />
              </section>
            </div>

            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <h3 className="text-lg font-display font-bold text-gray-900 mb-4">Other Services in {cityName}</h3>
                  <ul className="space-y-2 mb-8">
                    {services.filter(s => s.id !== service.id).map(s => (
                      <li key={s.id}>
                        <Link href={`/services/${s.slug}/${locationSlug}/`} className="block px-4 py-3 rounded-lg bg-gray-50 border border-gray-100 hover:border-brand-300 hover:bg-brand-50 text-gray-700 hover:text-brand-700 transition-all text-sm font-medium">
                          {s.title} in {cityName}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <h3 className="text-lg font-display font-bold text-gray-900 mb-4">{service.title} Elsewhere</h3>
                  <ul className="space-y-2">
                    {allCities.filter(c => c !== cityName).slice(0, 5).map(city => {
                      const slug = city.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                      return (
                        <li key={city}>
                          <Link href={`/services/${service.slug}/${slug}/`} className="block px-4 py-3 rounded-lg bg-gray-50 border border-gray-100 hover:border-brand-300 hover:bg-brand-50 text-gray-700 hover:text-brand-700 transition-all text-sm font-medium">
                            {service.title} in {city}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="bg-brand-900 text-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-lg font-display font-bold mb-3">From &pound;99/month</h3>
                  <p className="text-brand-100 text-sm mb-4">Flexible payment arrangements available from most {cityName} estate planning specialists for larger projects.</p>
                  <button onClick={() => setIsModalOpen(true)} className="block w-full bg-white text-brand-900 text-center font-bold py-3 px-6 rounded-xl hover:bg-brand-50 transition-colors text-sm">Get Free Quotes</button>
                </div>
              </div>
            </aside>
          </div>

          <div className="bg-brand-900 rounded-2xl p-8 md:p-12 text-center mt-12">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">Get {service.title} Quotes in {cityName}</h2>
            <p className="text-brand-200 mb-8 max-w-2xl mx-auto">Submit your brief in under two minutes. We will match you with up to three vetted {cityName} estate planning specialists with no obligation at any stage.</p>
            <button onClick={() => setIsModalOpen(true)} className="bg-white text-brand-900 font-bold text-lg py-4 px-10 rounded-xl hover:bg-brand-50 transition-colors">Get Your Free Quotes</button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
