import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { services, getServiceBySlug } from '@/data/services'
import { getServiceContentBySlug } from '@/data/serviceContent'
import { spokeAreas, getSpokeBySlug } from '@/data/harrowData'
import { siteConfig } from '@/data/site'
import ServiceLocationContent from '@/components/ServiceLocationContent'

interface Props {
  params: { serviceSlug: string; locationSlug: string }
}

export async function generateStaticParams() {
  const params: { serviceSlug: string; locationSlug: string }[] = []
  for (const service of services) {
    for (const area of spokeAreas) {
      params.push({ serviceSlug: service.slug, locationSlug: area.slug })
    }
  }
  return params
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getServiceBySlug(params.serviceSlug)
  const area    = getSpokeBySlug(params.locationSlug)
  if (!service || !area) return { title: 'Not Found' }

  const title = `${service.title} ${area.name} ${area.postcode} | Property Accountants Harrow`
  const description = `Specialist ${service.title.toLowerCase()} advice for ${area.name} landlords and property investors. Vetted ACCA and ICAEW certified specialists serving ${area.postcode}. Free matching, 48-hour introduction.`
  const canonical   = `${siteConfig.url}/services/${service.slug}/${area.slug}/`

  return {
    title,
    description,
    alternates: { canonical },
    openGraph:  { title, description, url: canonical, type: 'website' },
  }
}

export default function ServiceLocationPage({ params }: Props) {
  const service = getServiceBySlug(params.serviceSlug)
  const content = getServiceContentBySlug(params.serviceSlug)
  const area    = getSpokeBySlug(params.locationSlug)
  if (!service || !content || !area) notFound()

  return <ServiceLocationContent service={service} content={content} area={area} />
}
