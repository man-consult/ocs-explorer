import { useEffect } from 'react'
import type { TaxonomyItem, TaxonomyData } from '../types/taxonomy'
import { CodeBadge } from './CodeBadge'
import { CloseIcon } from './Icons'

interface L3DetailModalProps {
  item: TaxonomyItem
  taxonomy: TaxonomyData
  onClose: () => void
}

export function L3DetailModal({ item, taxonomy, onClose }: L3DetailModalProps) {
  const { l1, l2 } = taxonomy.taxonomy
  const parentL2 = l2.find((x) => x.code === item.parent_code)
  const parentL1 = parentL2
    ? l1.find((x) => x.code === parentL2.parent_code)
    : null

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm anim-fade" />

      {/* Modal */}
      <div
        className="relative bg-balestra-black border border-white/10 rounded-lg max-w-lg w-full max-h-[85vh] overflow-hidden flex flex-col anim-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between px-6 pt-6 pb-4 border-b border-white/10">
          <div className="flex-1 min-w-0 pr-4">
            {/* Breadcrumb */}
            <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-2 flex-wrap">
              {parentL1 && (
                <>
                  <span>{parentL1.name}</span>
                  <span className="text-gray-600">›</span>
                </>
              )}
              {parentL2 && (
                <>
                  <span>{parentL2.name}</span>
                  <span className="text-gray-600">›</span>
                </>
              )}
            </div>
            <div className="flex items-center gap-3 mb-1">
              <CodeBadge code={item.code} />
              <h2 className="text-lg font-serif font-semibold text-white truncate">
                {item.name}
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-white transition-colors p-1 -mr-1"
          >
            <CloseIcon size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto px-6 py-5 space-y-5">
          {item.description && (
            <div>
              <h3 className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-1.5">
                Description
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          )}

          {item.examples && (
            <div>
              <h3 className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-1.5">
                Examples
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {item.examples}
              </p>
            </div>
          )}

          {item.keywords && (
            <div>
              <h3 className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-2">
                Keywords
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {item.keywords
                  .split(',')
                  .map((kw) => kw.trim())
                  .filter(Boolean)
                  .slice(0, 20)
                  .map((kw, i) => (
                    <span
                      key={i}
                      className="inline-block text-xs px-2 py-0.5 rounded bg-white/5 text-gray-400 border border-white/5"
                    >
                      {kw}
                    </span>
                  ))}
              </div>
            </div>
          )}

          {item.supply_market_characteristics && (
            <div>
              <h3 className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-1.5">
                Supply Market Characteristics
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {item.supply_market_characteristics}
              </p>
            </div>
          )}

          {item.strategy_guidance && (
            <div>
              <h3 className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-1.5">
                Strategy Guidance
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {item.strategy_guidance}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
