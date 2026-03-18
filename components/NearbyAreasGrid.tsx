'use client';

import { useState } from 'react';
import { MapPin, ChevronDown } from 'lucide-react';
import { getNearbyAreas } from '@/data/nearby-areas';

interface NearbyAreasGridProps {
  cityName: string;
  serviceSlug?: string;
  serviceName?: string;
  initialVisible?: number;
}

export function NearbyAreasGrid({ cityName, serviceSlug, serviceName, initialVisible = 10 }: NearbyAreasGridProps) {
  const areas = getNearbyAreas(cityName);
  const [showAll, setShowAll] = useState(false);

  if (areas.length === 0) return null;

  const visibleAreas = showAll ? areas : areas.slice(0, initialVisible);
  const hiddenCount = areas.length - initialVisible;

  const heading = serviceName
    ? `${serviceName}: Areas Around ${cityName}`
    : `Areas We Cover Around ${cityName}`;

  const description = serviceName
    ? `Looking for ${serviceName.toLowerCase()} near ${cityName}? Our vetted specialists serve clients across ${cityName} and surrounding areas. We will match you with the right professional.`
    : `Our estate planning specialists serve clients from across the surrounding area. If you are based in any of the nearby areas listed below, we can match you with the right specialist.`;

  return (
    <section className="mb-16">
      <div className="flex items-center gap-3 mb-2">
        <div className="bg-brand-100 p-2 rounded-lg">
          <MapPin className="w-5 h-5 text-brand-600" />
        </div>
        <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900">{heading}</h2>
      </div>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
        {visibleAreas.map(area => (
          <div
            key={area}
            className="flex items-center gap-2 px-3 py-2.5 bg-gray-50 border border-gray-100 rounded-lg text-sm text-gray-700 hover:bg-brand-50 hover:border-brand-200 hover:text-brand-700 transition-colors"
          >
            <MapPin className="w-3 h-3 text-brand-400 flex-shrink-0" />
            <span className="font-medium truncate">
              {area}
            </span>
          </div>
        ))}
      </div>

      {hiddenCount > 0 && !showAll && (
        <button
          onClick={() => setShowAll(true)}
          className="mt-4 flex items-center gap-2 text-brand-600 font-bold text-sm hover:underline"
        >
          Show all {areas.length} areas around {cityName}
          <ChevronDown className="w-4 h-4" />
        </button>
      )}

      {showAll && hiddenCount > 0 && (
        <button
          onClick={() => setShowAll(false)}
          className="mt-4 flex items-center gap-2 text-brand-600 font-bold text-sm hover:underline"
        >
          Show fewer
          <ChevronDown className="w-4 h-4 rotate-180" />
        </button>
      )}

      {/* SEO paragraph */}
      <div className="mt-6 prose prose-sm max-w-none text-gray-500">
        <p>
          Clients from {areas.slice(0, 5).join(', ')}, and other areas around {cityName} regularly use our service to find estate planning specialists.{' '}
          {serviceName
            ? `If you need ${serviceName.toLowerCase()} and are based in or near ${cityName}, our vetted estate planning specialists can arrange a free initial conversation at a time that suits you.`
            : `All of our ${cityName} partner estate planning specialists are vetted, insured, and responsive to your timeline and project needs.`
          }
        </p>
      </div>
    </section>
  );
}
