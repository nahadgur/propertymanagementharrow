'use client';
import Link from 'next/link';
import { Shield, ArrowRight } from 'lucide-react';
import type { Service } from '@/data/services';
export function ServiceBanner({ service }: { service: Service }) {
  return (
    <div className="not-prose my-10 rounded-2xl bg-gradient-to-br from-brand-800 via-brand-900 to-brand-950 text-white p-6 md:p-8 shadow-lg border border-brand-700/30 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-48 h-48 bg-brand-500/10 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-400/5 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
        <div className="flex-shrink-0"><div className="w-14 h-14 bg-brand-500/20 border border-brand-400/30 rounded-xl flex items-center justify-center"><Shield className="w-7 h-7 text-brand-300" /></div></div>
        <div className="flex-1 min-w-0">
          <p className="text-brand-300 text-xs font-bold uppercase tracking-widest mb-1.5">Featured Service</p>
          <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-2 leading-snug">{service.title}</h3>
          <p className="text-brand-200 text-sm leading-relaxed line-clamp-2">{service.description}</p>
        </div>
        <div className="flex-shrink-0"><Link href={`/services/${service.slug}/`} className="inline-flex items-center gap-2 bg-white text-brand-900 font-bold text-sm py-3 px-6 rounded-xl hover:bg-brand-50 transition-colors shadow-md whitespace-nowrap">Find Specialists <ArrowRight className="w-4 h-4" /></Link></div>
      </div>
    </div>
  );
}
