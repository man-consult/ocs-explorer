const L1_COLORS: Record<string, { bg: string; text: string }> = {
  '01': { bg: 'bg-amber-900/30', text: 'text-amber-400' },
  '02': { bg: 'bg-blue-900/30', text: 'text-blue-400' },
  '03': { bg: 'bg-emerald-900/30', text: 'text-emerald-400' },
  '04': { bg: 'bg-purple-900/30', text: 'text-purple-400' },
  '05': { bg: 'bg-rose-900/30', text: 'text-rose-400' },
  '06': { bg: 'bg-teal-900/30', text: 'text-teal-400' },
  '07': { bg: 'bg-yellow-900/30', text: 'text-yellow-400' },
  '08': { bg: 'bg-orange-900/30', text: 'text-orange-400' },
  '09': { bg: 'bg-pink-900/30', text: 'text-pink-400' },
  '10': { bg: 'bg-indigo-900/30', text: 'text-indigo-400' },
  '11': { bg: 'bg-sky-900/30', text: 'text-sky-400' },
  '12': { bg: 'bg-stone-800/50', text: 'text-stone-300' },
  '13': { bg: 'bg-cyan-900/30', text: 'text-cyan-400' },
  '14': { bg: 'bg-green-900/30', text: 'text-green-400' },
  '15': { bg: 'bg-orange-900/40', text: 'text-orange-300' },
}

export function getL1Color(code: string) {
  const l1 = code.substring(0, 2)
  return L1_COLORS[l1] ?? { bg: 'bg-gray-800', text: 'text-gray-400' }
}

export function getL1BorderColor(l1Code: string): string {
  const map: Record<string, string> = {
    '01': 'border-amber-500/50',
    '02': 'border-blue-500/50',
    '03': 'border-emerald-500/50',
    '04': 'border-purple-500/50',
    '05': 'border-rose-500/50',
    '06': 'border-teal-500/50',
    '07': 'border-yellow-500/50',
    '08': 'border-orange-500/50',
    '09': 'border-pink-500/50',
    '10': 'border-indigo-500/50',
    '11': 'border-sky-500/50',
    '12': 'border-stone-500/50',
    '13': 'border-cyan-500/50',
    '14': 'border-green-500/50',
    '15': 'border-orange-400/50',
  }
  return map[l1Code] ?? 'border-gray-500/50'
}

export function CodeBadge({ code }: { code: string }) {
  const { bg, text } = getL1Color(code)
  return (
    <span
      className={`inline-block font-mono text-xs px-2 py-0.5 rounded ${bg} ${text}`}
    >
      {code}
    </span>
  )
}
