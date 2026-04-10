export interface PricingTier {
  id: string
  name: string
  price: number
  description: string
  features: string[]
  isPopular?: boolean
}

export const pricingTiers: PricingTier[] = []

export const treatmentIncludes: string[] = []

export const financeInfo = {
  description: '',
  monthlyFrom: 0,
  spreadOver: 12,
}

export function getPricingForService(_serviceId: string): PricingTier[] {
  return []
}
