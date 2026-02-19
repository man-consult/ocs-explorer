import { useRef, useEffect, useState } from 'react'
import type { TaxonomyData, TaxonomyItem } from '../types/taxonomy'
import { useSearch } from '../hooks/useSearch'
import { SearchIcon } from './Icons'
import { CategoryCard } from './CategoryCard'
import { L3DetailModal } from './L3DetailModal'

interface SearchTabProps {
  taxonomy: TaxonomyData
}

export function SearchTab({ taxonomy }: SearchTabProps) {
  const { query, setQuery, results } = useSearch(taxonomy)
  const [selected, setSelected] = useState<TaxonomyItem | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <div className="max-w-2xl">
      {/* Search input */}
      <div className="relative mb-7">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
          <SearchIcon size={18} />
        </div>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by item, keyword, or example — e.g. 'laptop', 'SAP', 'steel coil'"
          className="w-full bg-white/5 border border-white/10 rounded-sm py-3.5 pl-12 pr-4 text-[15px] text-white placeholder-gray-500 focus:border-balestra-red focus:ring-1 focus:ring-balestra-red/30 outline-none transition-all"
        />
      </div>

      {/* Results */}
      {query.length >= 2 && (
        <div className="mb-4 text-xs text-gray-500">
          {results.length === 0
            ? 'No matching categories'
            : `${results.length} result${results.length !== 1 ? 's' : ''}`}
        </div>
      )}

      {results.length > 0 && (
        <div className="space-y-3">
          {results.map((item) => (
            <CategoryCard
              key={item.code}
              item={item}
              taxonomy={taxonomy}
              onClick={() => setSelected(item)}
            />
          ))}
        </div>
      )}

      {/* Empty state */}
      {query.length >= 2 && results.length === 0 && (
        <div className="bg-balestra-black border border-white/10 rounded-sm p-12 text-center">
          <div className="text-3xl text-gray-600 mb-3">—</div>
          <div className="font-serif text-lg text-gray-400 mb-2">
            No matching categories
          </div>
          <p className="text-sm text-gray-500">
            Try broader terms, or use the Wizard to navigate by purchase type.
          </p>
        </div>
      )}

      {/* Initial state */}
      {query.length < 2 && (
        <div className="space-y-6">
          <div className="bg-balestra-black border border-white/10 rounded-sm p-8 text-center">
            <p className="text-sm text-gray-400">
              Start typing to search across{' '}
              <span className="text-white font-medium">
                {taxonomy.taxonomy.l3.length}
              </span>{' '}
              Level 3 detail codes by name, keyword, or example.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              'laptops',
              'consulting',
              'freight',
              'software',
              'cleaning',
              'insurance',
            ].map((term) => (
              <button
                key={term}
                onClick={() => setQuery(term)}
                className="text-xs text-gray-500 bg-white/5 border border-white/5 rounded px-3 py-2 hover:text-white hover:border-white/10 transition-all"
              >
                Try &ldquo;{term}&rdquo;
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Detail modal */}
      {selected && (
        <L3DetailModal
          item={selected}
          taxonomy={taxonomy}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  )
}
