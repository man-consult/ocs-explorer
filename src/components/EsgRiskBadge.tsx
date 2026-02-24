type EsgRisk = 'high' | 'medium' | 'low'

const RISK_CONFIG: Record<EsgRisk, { label: string; bg: string; text: string; border: string }> = {
  high: {
    label: 'High',
    bg: 'bg-red-900/30',
    text: 'text-red-400',
    border: 'border-red-800/40',
  },
  medium: {
    label: 'Medium',
    bg: 'bg-amber-900/30',
    text: 'text-amber-400',
    border: 'border-amber-800/40',
  },
  low: {
    label: 'Low',
    bg: 'bg-emerald-900/30',
    text: 'text-emerald-400',
    border: 'border-emerald-800/40',
  },
}

interface EsgRiskBadgeProps {
  risk: EsgRisk | null | undefined
  size?: 'sm' | 'md'
}

export function EsgRiskBadge({ risk, size = 'sm' }: EsgRiskBadgeProps) {
  if (!risk) return null
  const cfg = RISK_CONFIG[risk]

  return (
    <span
      className={`inline-flex items-center gap-1 rounded border font-medium ${cfg.bg} ${cfg.text} ${cfg.border} ${
        size === 'sm' ? 'text-[10px] px-1.5 py-0.5' : 'text-xs px-2 py-0.5'
      }`}
    >
      <span
        className={`inline-block rounded-full ${
          size === 'sm' ? 'w-1.5 h-1.5' : 'w-2 h-2'
        } ${risk === 'high' ? 'bg-red-400' : risk === 'medium' ? 'bg-amber-400' : 'bg-emerald-400'}`}
      />
      ESG {cfg.label}
    </span>
  )
}

/** Derive ESG risk tier from an L1 code prefix */
export function getEsgRisk(code: string): EsgRisk {
  const l1 = code.substring(0, 2)
  if (['01', '03', '06', '12', '15'].includes(l1)) return 'high'
  if (['02', '05', '08', '11', '13'].includes(l1)) return 'medium'
  return 'low'
}
