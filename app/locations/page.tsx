import { permanentRedirect } from 'next/navigation'

// Location-route consolidation 2026-06-09: the canonical local system is
// /harrow/[area]/ (data-driven, in nav and sitemap). The competing /locations
// index and the /location and /location/[city] routes all 308 to the pillar to
// avoid duplicate, competing local pages.
export default function LocationsPage() {
  permanentRedirect('/property-management-harrow/')
}
