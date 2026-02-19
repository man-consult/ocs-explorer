export interface TaxonomyVersion {
  number: string
  type: string
  status: string
  releaseDate: string | null
  description: string | null
}

export interface TaxonomyItem {
  id: number
  code: string
  level: 1 | 2 | 3
  parent_code: string | null
  name: string
  description: string | null
  keywords: string | null
  examples: string | null
  supply_market_characteristics: string | null
  strategy_guidance: string | null
  display_order: number
}

export interface TaxonomyData {
  version: TaxonomyVersion
  taxonomy: {
    l1: TaxonomyItem[]
    l2: TaxonomyItem[]
    l3: TaxonomyItem[]
  }
  totalItems: number
}

export type TabId = 'search' | 'browse' | 'classify' | 'guide'
