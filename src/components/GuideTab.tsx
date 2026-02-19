import { ExternalLinkIcon } from './Icons'

function Section({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`bg-balestra-black border border-white/10 rounded-sm p-6 md:p-8 ${className}`}
    >
      {children}
    </div>
  )
}

export function GuideTab() {
  return (
    <div className="max-w-2xl space-y-6">
      {/* What OCS Is */}
      <Section>
        <h2 className="font-serif text-xl font-semibold text-white mb-4">
          What OCS Is
        </h2>
        <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p>
            Most procurement taxonomies ask: &lsquo;What is it?&rsquo; OCS asks
            a different question: <strong className="text-white">&lsquo;How are we managing it?&rsquo;</strong>
          </p>
          <p>OCS organises spend by three things:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-400 ml-2">
            <li>
              <span className="text-gray-300">
                Supply market characteristics
              </span>{' '}
              — who the suppliers are and how they compete
            </li>
            <li>
              <span className="text-gray-300">Strategic intent</span> — how
              you&apos;re managing the relationship
            </li>
            <li>
              <span className="text-gray-300">Make/buy boundaries</span> —
              where you engage the supply market
            </li>
          </ul>
          <p className="text-gray-400">
            This makes OCS a procurement tool, not an accounting tool. Your
            general ledger handles financial reporting. OCS handles category
            strategy.
          </p>
        </div>
      </Section>

      {/* The Golden Rule */}
      <Section>
        <h2 className="font-serif text-xl font-semibold text-white mb-4">
          The Golden Rule
        </h2>
        <div className="border-l-2 border-balestra-red/30 pl-5 mb-4">
          <p className="text-sm text-gray-300 leading-relaxed">
            Before classifying anything, ask:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-300 mt-2">
            <li>Can we negotiate this component separately?</li>
            <li>Do we want to manage it as a distinct supply market?</li>
            <li>Is it significant enough to warrant separate attention?</li>
          </ul>
        </div>
        <p className="text-sm text-gray-400 leading-relaxed">
          If the answer is <strong className="text-gray-300">no</strong> to any
          of these, keep it bundled in the primary classification. Don&apos;t
          create category complexity that doesn&apos;t reflect how you&apos;re
          actually operating.
        </p>
      </Section>

      {/* Three-Test Framework */}
      <Section>
        <h2 className="font-serif text-xl font-semibold text-white mb-4">
          The Three-Test Framework
        </h2>
        <p className="text-sm text-gray-400 mb-5 leading-relaxed">
          When a purchase includes multiple distinct components, apply all three
          tests before splitting. If any test fails, keep bundled. If all three
          pass, split.
        </p>

        <div className="space-y-4">
          {/* Test 1 */}
          <div className="bg-white/[0.03] border border-white/5 rounded p-5">
            <h3 className="text-sm font-semibold text-white mb-2">
              Test 1: Materiality
            </h3>
            <p className="text-sm text-gray-400 mb-2">
              Is this component significant enough to manage separately?
            </p>
            <ul className="list-disc list-inside text-xs text-gray-400 space-y-1 ml-1">
              <li>More than 5–10% of total contract value, or more than $10K</li>
              <li>Different lifecycle or refresh requirement</li>
              <li>Would you benchmark it separately?</li>
              <li>Strategically important to the business</li>
            </ul>
          </div>

          {/* Test 2 */}
          <div className="bg-white/[0.03] border border-white/5 rounded p-5">
            <h3 className="text-sm font-semibold text-white mb-2">
              Test 2: Control
            </h3>
            <p className="text-sm text-gray-400 mb-2">
              Can you actually manage this component separately?
            </p>
            <ul className="list-disc list-inside text-xs text-gray-400 space-y-1 ml-1">
              <li>
                Incoterms give you control? (EXW, FOB = you; CIF, DDP = seller)
              </li>
              <li>Contract structure allows separation</li>
              <li>Market alternatives exist</li>
              <li>Separating wouldn&apos;t destroy functionality</li>
            </ul>
          </div>

          {/* Test 3 */}
          <div className="bg-white/[0.03] border border-white/5 rounded p-5">
            <h3 className="text-sm font-semibold text-white mb-2">
              Test 3: Strategic Intent
            </h3>
            <p className="text-sm text-gray-400 mb-2">
              Are you managing this separately now, or might you reasonably want
              to?
            </p>
            <ul className="list-disc list-inside text-xs text-gray-400 space-y-1 ml-1">
              <li>Actively managing supplier relationships separately today</li>
              <li>Might want to source separately in future</li>
              <li>Separate data would help future sourcing decisions</li>
              <li>Building the business case for unbundling</li>
            </ul>
          </div>
        </div>

        <div className="mt-4 bg-balestra-red/10 border border-balestra-red/20 rounded px-4 py-3">
          <p className="text-sm text-gray-300">
            <strong className="text-white">When in doubt, split.</strong>{' '}
            Preserves future optionality at no cost. You can consolidate later —
            you can&apos;t retroactively split.
          </p>
        </div>
      </Section>

      {/* Core Principles */}
      <Section>
        <h2 className="font-serif text-xl font-semibold text-white mb-4">
          Core Principles
        </h2>
        <div className="space-y-5">
          {[
            {
              n: '1',
              title: 'Supply market, not product',
              body: "OCS classifies by who you buy from and how they compete — not what the item is called. The same HVAC unit belongs in three different categories depending on who's buying it and why.",
            },
            {
              n: '2',
              title: 'Strategic intent determines classification',
              body: "The same item can belong in different categories based on your intent. Safety boots for a uniform programme classify differently from safety boots for compliance.",
            },
            {
              n: '3',
              title: 'Make/buy boundary determines Level 3',
              body: "Where you engage the supply market determines your Level 3 code. A car manufacturer buying complete engines classifies differently from an engine manufacturer buying cylinder blocks.",
            },
          ].map((p) => (
            <div key={p.n} className="flex gap-4">
              <div className="flex-shrink-0 w-7 h-7 rounded bg-white/5 flex items-center justify-center text-xs font-mono text-gray-400">
                {p.n}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white mb-1">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Links to full documents */}
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href="/playbook"
          className="flex-1 flex items-center justify-center gap-2 bg-white/5 border border-white/10 rounded-sm px-5 py-3.5 text-sm text-gray-300 hover:border-balestra-red/50 hover:text-white transition-all"
        >
          <ExternalLinkIcon size={14} />
          Read the full Playbook
        </a>
        <a
          href="/guide"
          className="flex-1 flex items-center justify-center gap-2 bg-white/5 border border-white/10 rounded-sm px-5 py-3.5 text-sm text-gray-300 hover:border-balestra-red/50 hover:text-white transition-all"
        >
          <ExternalLinkIcon size={14} />
          Read the full User Guide
        </a>
      </div>
    </div>
  )
}
