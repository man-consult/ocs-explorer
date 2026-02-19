import { useState } from 'react'
import type { TaxonomyData, TaxonomyItem } from '../types/taxonomy'
import { CodeBadge, getL1BorderColor } from './CodeBadge'
import { ChevronRight, ChevronDown } from './Icons'
import { L3DetailModal } from './L3DetailModal'

interface BrowseTabProps {
  taxonomy: TaxonomyData
}

export function BrowseTab({ taxonomy }: BrowseTabProps) {
  const { l1, l2, l3 } = taxonomy.taxonomy
  const [expanded, setExpanded] = useState<Set<string>>(new Set())
  const [selected, setSelected] = useState<TaxonomyItem | null>(null)

  const toggle = (code: string) => {
    setExpanded((prev) => {
      const next = new Set(prev)
      if (next.has(code)) {
        next.delete(code)
      } else {
        next.add(code)
      }
      return next
    })
  }

  const expandAll = () => {
    const all = new Set<string>()
    l1.forEach((x) => all.add(x.code))
    l2.forEach((x) => all.add(x.code))
    setExpanded(all)
  }

  const collapseAll = () => setExpanded(new Set())

  return (
    <div className="max-w-3xl">
      {/* Controls */}
      <div className="flex gap-3 mb-6">
        <button
          onClick={expandAll}
          className="text-xs text-gray-500 hover:text-white bg-white/5 border border-white/5 rounded px-3 py-1.5 transition-all"
        >
          Expand all
        </button>
        <button
          onClick={collapseAll}
          className="text-xs text-gray-500 hover:text-white bg-white/5 border border-white/5 rounded px-3 py-1.5 transition-all"
        >
          Collapse all
        </button>
        <span className="text-xs text-gray-600 self-center ml-auto">
          {l1.length} categories &middot; {l2.length} classes &middot;{' '}
          {l3.length} details
        </span>
      </div>

      {/* Tree */}
      <div className="space-y-2">
        {l1.map((l1Item) => {
          const l1Expanded = expanded.has(l1Item.code)
          const l2Children = l2.filter((x) => x.parent_code === l1Item.code)
          const borderColor = getL1BorderColor(l1Item.code)

          return (
            <div
              key={l1Item.code}
              className={`bg-balestra-black border border-white/10 rounded-sm overflow-hidden`}
            >
              {/* L1 header */}
              <button
                onClick={() => toggle(l1Item.code)}
                className={`w-full flex items-center gap-3 px-4 py-3.5 text-left hover:bg-white/5 transition-all border-l-3 ${borderColor}`}
              >
                <span className="text-gray-500">
                  {l1Expanded ? (
                    <ChevronDown size={14} />
                  ) : (
                    <ChevronRight size={14} />
                  )}
                </span>
                <CodeBadge code={l1Item.code} />
                <span className="text-sm font-medium text-white flex-1">
                  {l1Item.name}
                </span>
                <span className="text-xs text-gray-600">
                  {l2Children.length} classes
                </span>
              </button>

              {/* L2 children */}
              {l1Expanded && (
                <div className="border-t border-white/5">
                  {l2Children.map((l2Item) => {
                    const l2Expanded = expanded.has(l2Item.code)
                    const l3Children = l3.filter(
                      (x) => x.parent_code === l2Item.code,
                    )

                    return (
                      <div key={l2Item.code}>
                        <button
                          onClick={() => toggle(l2Item.code)}
                          className="w-full flex items-center gap-3 pl-10 pr-4 py-2.5 text-left hover:bg-white/5 transition-all"
                        >
                          <span className="text-gray-600">
                            {l2Expanded ? (
                              <ChevronDown size={13} />
                            ) : (
                              <ChevronRight size={13} />
                            )}
                          </span>
                          <CodeBadge code={l2Item.code} />
                          <span className="text-sm text-gray-300 flex-1">
                            {l2Item.name}
                          </span>
                          <span className="text-xs text-gray-600">
                            {l3Children.length}
                          </span>
                        </button>

                        {/* L3 children */}
                        {l2Expanded && l3Children.length > 0 && (
                          <div className="bg-white/[0.02]">
                            {l3Children.map((l3Item) => (
                              <button
                                key={l3Item.code}
                                onClick={() => setSelected(l3Item)}
                                className="w-full flex items-center gap-3 pl-[72px] pr-4 py-2 text-left hover:bg-white/5 transition-all group"
                              >
                                <CodeBadge code={l3Item.code} />
                                <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                                  {l3Item.name}
                                </span>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </div>

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
