import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { services } from '@/data/services';
import { siteConfig } from '@/data/site';
import { topAreas } from '@/data/homepage';
import { toSlug } from '@/data/locations';

export function Footer() {
  const footerLocations = topAreas.slice(0, 6);

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container-width">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-500 rounded-md flex items-center justify-center text-white font-bold">LOGO</div>
              <span className="font-display font-bold text-lg text-white">{siteConfig.name}</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Free matching service for Harrow landlords and freeholders. We connect you with vetted property management specialists across Harrow and the surrounding area.
            </p>
            <p className="text-xs text-gray-500 italic border-l-2 border-gray-700 pl-3">
              We are a referral and matching service, not a property management company. All work is carried out by independent specialists in our vetted network.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {services.map(s => (
                <li key={s.id}>
                  <Link href={`/services/${s.slug}/`} className="hover:text-brand-400 transition-colors">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Locations */}
          <div>
            <h4 className="text-white font-semibold mb-4">Popular Areas</h4>
            <ul className="space-y-2 text-sm">
              {footerLocations.map(area => (
                <li key={area}>
                  <Link href={`/location/${toSlug(area)}/`} className="hover:text-brand-400 transition-colors">{area}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Service Area</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4 text-brand-500" /> {siteConfig.name}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. We are a matching service, not a property management company.</p>
          <div className="flex gap-6">
            <Link href="/sitemap.xml" className="hover:text-gray-300">Sitemap</Link>
            <Link href="/services/" className="hover:text-gray-300">Services</Link>
            <Link href="/location/" className="hover:text-gray-300">Locations</Link>
            <Link href="/blog/" className="hover:text-gray-300">Blog</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
