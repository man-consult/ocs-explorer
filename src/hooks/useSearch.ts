import { useState, useMemo } from 'react'
import type { TaxonomyItem, TaxonomyData } from '../types/taxonomy'

export function useSearch(taxonomy: TaxonomyData | null) {
  const [query, setQuery] = useState('')

  const results: TaxonomyItem[] = useMemo(() => {
    if (!taxonomy || query.length < 2) return []

    const q = query.toLowerCase()
    const { l3 } = taxonomy.taxonomy

    return l3
      .filter((item) => {
        const fields = [item.name, item.keywords, item.examples, item.description, item.code]
          .filter(Boolean)
          .join(' ')
          .toLowerCase()
        return fields.includes(q)
      })
      .slice(0, 30)
  }, [taxonomy, query])

  return { query, setQuery, results }
}
