import type { TaxonomyItem, TaxonomyData } from '../types/taxonomy'
import { CodeBadge } from './CodeBadge'
import { EsgRiskBadge } from './EsgRiskBadge'

interface CategoryCardProps {
  item: TaxonomyItem
  taxonomy: TaxonomyData
  onClick: () => void
  style?: React.CSSProperties
}

export function CategoryCard({
  item,
  taxonomy,
  onClick,
  style,
}: CategoryCardProps) {
  const { l1, l2 } = taxonomy.taxonomy
  const parentL2 = l2.find((x) => x.code === item.parent_code)
  const parentL1 = parentL2
    ? l1.find((x) => x.code === parentL2.parent_code)
    : null

  return (
    <button
      onClick={onClick}
      style={style}
      className="result-card w-full text-left bg-balestra-black border border-white/10 rounded-sm p-5 hover:border-balestra-red/50 transition-all cursor-pointer group"
    >
      <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
        {parentL1 && <span>{parentL1.name}</span>}
        {parentL1 && parentL2 && <span className="text-gray-500">›</span>}
        {parentL2 && <span>{parentL2.name}</span>}
      </div>
      <div className="flex items-center gap-3 mb-2">
        <CodeBadge code={item.code} />
        <h3 className="text-sm font-medium text-white group-hover:text-balestra-red transition-colors flex-1">
          {item.name}
        </h3>
        <EsgRiskBadge risk={item.esg_risk} />
      </div>
      {item.examples && (
        <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">
          {item.examples}
        </p>
      )}
    </button>
  )
}
