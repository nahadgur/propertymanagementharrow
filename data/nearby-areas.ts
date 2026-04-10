export interface NearbyArea {
  name: string
  slug: string
  distance: string
}

export function getNearbyAreas(_citySlug: string): NearbyArea[] {
  return []
}
