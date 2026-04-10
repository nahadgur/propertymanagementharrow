export interface PricingTier {
  slug:            string
  treatment:       string
  description:     string
  priceFrom:       number
  priceTo:         number
  typicalDuration: string
  serviceIncludes: string
}

export const pricingTiers: PricingTier[] = []

export const treatmentIncludes: string[] = []

export const financeInfo = {
  description:  '',
  monthlyFrom:  0,
  spreadOver:   12,
}

export function getPricingForService(_serviceId: string): PricingTier[] {
  return []
}
