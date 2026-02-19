import { useState, useEffect } from 'react'
import type { TaxonomyData } from '../types/taxonomy'

export function useTaxonomy() {
  const [data, setData] = useState<TaxonomyData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/taxonomy')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load taxonomy')
        return res.json() as Promise<TaxonomyData>
      })
      .then(setData)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return { data, loading, error }
}
