import { useState } from 'react'
import type { TaxonomyData } from '../types/taxonomy'
import { wizardFlow } from '../data/wizardFlow'
import { CodeBadge } from './CodeBadge'
import { ArrowLeftIcon, RefreshIcon, ArrowRight, CheckIcon } from './Icons'

interface WizardTabProps {
  taxonomy: TaxonomyData
}

export function WizardTab({ taxonomy }: WizardTabProps) {
  const [step, setStep] = useState('start')
  const [history, setHistory] = useState<string[]>([])
  const [result, setResult] = useState<{
    code: string
    label: string
    note?: string
  } | null>(null)

  const current = wizardFlow[step]

  const choose = (opt: (typeof wizardFlow)['start']['options'][0]) => {
    if (opt.result) {
      setResult(opt.result)
    } else if (opt.next) {
      setHistory((h) => [...h, step])
      setStep(opt.next)
    }
  }

  const back = () => {
    if (history.length > 0) {
      const prev = history[history.length - 1]
      setHistory((h) => h.slice(0, -1))
      setStep(prev)
      setResult(null)
    }
  }

  const reset = () => {
    setStep('start')
    setHistory([])
    setResult(null)
  }

  const isActionResult =
    result &&
    (result.code === 'split' ||
      result.code === 'bundle' ||
      result.code === 'embed')

  // Look up matching taxonomy items for result
  const matchingL1 =
    result && !isActionResult
      ? taxonomy.taxonomy.l1.find(
          (x) =>
            result.code.startsWith(x.code) && result.code.length >= 2,
        )
      : null
  const matchingL2 =
    result && !isActionResult
      ? taxonomy.taxonomy.l2.find((x) => x.code === result.code)
      : null

  return (
    <div className="max-w-xl">
      {/* Result */}
      {result ? (
        <div className="anim-slide-up">
          <div className="bg-balestra-black border border-white/10 rounded-sm p-6">
            {/* Result header */}
            <div className="flex items-center gap-2 mb-4">
              <div
                className={`w-8 h-8 rounded flex items-center justify-center ${
                  isActionResult
                    ? result.code === 'split'
                      ? 'bg-emerald-900/40 text-emerald-400'
                      : result.code === 'bundle'
                        ? 'bg-blue-900/40 text-blue-400'
                        : 'bg-amber-900/40 text-amber-400'
                    : 'bg-balestra-red/20 text-balestra-red'
                }`}
              >
                <CheckIcon size={16} />
              </div>
              <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold">
                {isActionResult ? 'Recommendation' : 'Suggested Classification'}
              </span>
            </div>

            {/* Code + label */}
            <div className="flex items-center gap-3 mb-3">
              {!isActionResult && <CodeBadge code={result.code} />}
              <h3 className="text-lg font-serif font-semibold text-white">
                {result.label}
              </h3>
            </div>

            {/* Note */}
            {result.note && (
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                {result.note}
              </p>
            )}

            {/* L1 context */}
            {matchingL1 && (
              <div className="bg-white/5 border border-white/5 rounded px-4 py-3 mb-4">
                <div className="text-xs text-gray-500 mb-1">
                  Level 1 Category
                </div>
                <div className="flex items-center gap-2">
                  <CodeBadge code={matchingL1.code} />
                  <span className="text-sm text-gray-300">
                    {matchingL1.name}
                  </span>
                </div>
                {matchingL1.description && (
                  <p className="text-xs text-gray-500 mt-1">
                    {matchingL1.description}
                  </p>
                )}
              </div>
            )}

            {/* L2 context */}
            {matchingL2 && (
              <div className="bg-white/5 border border-white/5 rounded px-4 py-3 mb-4">
                <div className="text-xs text-gray-500 mb-1">
                  Level 2 Class
                </div>
                <div className="flex items-center gap-2">
                  <CodeBadge code={matchingL2.code} />
                  <span className="text-sm text-gray-300">
                    {matchingL2.name}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-3 mt-4">
            <button
              onClick={back}
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white bg-white/5 border border-white/5 rounded px-4 py-2 transition-all"
            >
              <ArrowLeftIcon size={14} />
              Back
            </button>
            <button
              onClick={reset}
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white bg-white/5 border border-white/5 rounded px-4 py-2 transition-all"
            >
              <RefreshIcon size={14} />
              Start over
            </button>
          </div>
        </div>
      ) : current ? (
        /* Question */
        <div className="anim-slide-up">
          {/* Progress */}
          <div className="flex items-center gap-2 mb-6">
            <div className="text-xs text-gray-500">
              Step {history.length + 1}
            </div>
            <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full bg-balestra-red/50 rounded-full transition-all"
                style={{
                  width: `${Math.min(100, ((history.length + 1) / 3) * 100)}%`,
                }}
              />
            </div>
          </div>

          {/* Question */}
          <h2 className="text-lg font-serif font-semibold text-white mb-2">
            {current.question}
          </h2>
          {current.hint && (
            <p className="text-sm text-gray-500 mb-6">{current.hint}</p>
          )}

          {/* Options */}
          <div className="space-y-2">
            {current.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => choose(opt)}
                className="w-full flex items-center justify-between text-left bg-balestra-black border border-white/10 rounded-sm px-5 py-4 text-sm text-gray-300 hover:border-balestra-red hover:bg-balestra-red/5 hover:text-white transition-all group"
              >
                <span>{opt.label}</span>
                <ArrowRight
                  size={14}
                  className="text-gray-600 group-hover:text-balestra-red transition-colors flex-shrink-0 ml-3"
                />
              </button>
            ))}
          </div>

          {/* Back button */}
          {history.length > 0 && (
            <button
              onClick={back}
              className="flex items-center gap-2 mt-4 text-sm text-gray-500 hover:text-white transition-colors"
            >
              <ArrowLeftIcon size={14} />
              Back
            </button>
          )}
        </div>
      ) : null}
    </div>
  )
}
