import type { TabId, TaxonomyData } from '../types/taxonomy'
import { SearchIcon, FolderIcon, WandIcon, BookIcon, MailIcon, ExternalLinkIcon, DownloadIcon } from './Icons'

interface HomeTabProps {
  taxonomy: TaxonomyData | null
  onTabChange: (tab: TabId) => void
}

export function HomeTab({ taxonomy, onTabChange }: HomeTabProps) {
  const l1Count = taxonomy?.taxonomy.l1.length ?? 15
  const l2Count = taxonomy?.taxonomy.l2.length ?? 71
  const l3Count = taxonomy?.taxonomy.l3.length ?? 361

  return (
    <div className="max-w-2xl space-y-8">
      {/* Hero */}
      <div className="anim-slide-up">
        <div className="w-24 h-1 bg-balestra-red mb-6 rounded-full" />
        <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white leading-tight mb-4">
          A procurement taxonomy built for strategy, not accounting.
        </h2>
        <p className="text-[15px] text-gray-300 leading-relaxed mb-3">
          The Open Category Standard (OCS) organises third-party spend by{' '}
          <strong className="text-white">supply market</strong>,{' '}
          <strong className="text-white">strategic intent</strong>, and{' '}
          <strong className="text-white">make/buy boundaries</strong> &mdash; not
          by what the item is called.
        </p>
        <p className="text-[15px] text-gray-400 leading-relaxed">
          Most taxonomies ask &ldquo;What is it?&rdquo; OCS asks{' '}
          <strong className="text-white">&ldquo;How are we managing it?&rdquo;</strong>{' '}
          That shift changes everything.
        </p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { n: l1Count, label: 'Categories', sub: 'Level 1' },
          { n: l2Count, label: 'Classes', sub: 'Level 2' },
          { n: `${l3Count}+`, label: 'Detail Codes', sub: 'Level 3' },
        ].map((s) => (
          <div
            key={s.label}
            className="bg-balestra-black border border-white/10 rounded-sm p-4 text-center"
          >
            <div className="text-2xl font-serif font-semibold text-white">
              {s.n}
            </div>
            <div className="text-xs text-gray-400 mt-0.5">{s.label}</div>
            <div className="text-[10px] text-gray-500 font-mono mt-0.5">
              {s.sub}
            </div>
          </div>
        ))}
      </div>

      {/* What you can do */}
      <div>
        <h3 className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-4">
          What you can do here
        </h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            {
              id: 'search' as TabId,
              icon: <SearchIcon size={16} />,
              title: 'Search',
              desc: 'Find any classification by keyword, item name, or example.',
            },
            {
              id: 'browse' as TabId,
              icon: <FolderIcon size={16} />,
              title: 'Browse',
              desc: 'Explore the full hierarchy from Level 1 through Level 3.',
            },
            {
              id: 'classify' as TabId,
              icon: <WandIcon size={16} />,
              title: 'Classify',
              desc: 'Answer a few questions to find the right classification.',
            },
            {
              id: 'guide' as TabId,
              icon: <BookIcon size={16} />,
              title: 'Principles',
              desc: 'The Golden Rule, Three-Test Framework, and core principles.',
            },
          ].map((card) => (
            <button
              key={card.id}
              onClick={() => onTabChange(card.id)}
              className="text-left bg-balestra-black border border-white/10 rounded-sm p-5 hover:border-balestra-red/50 hover:bg-balestra-red/5 transition-all group"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <span className="text-gray-400 group-hover:text-balestra-red transition-colors">
                  {card.icon}
                </span>
                <span className="text-sm font-medium text-white">
                  {card.title}
                </span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                {card.desc}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Key idea callout */}
      <div className="bg-balestra-red/8 border border-balestra-red/20 rounded-sm px-5 py-4">
        <p className="text-sm text-gray-300 leading-relaxed">
          <strong className="text-white">The same item can have different classifications.</strong>{' '}
          An HVAC unit installed by a construction company is Building Services (12-02).
          The same unit replacing hospital infrastructure is Facilities (02-03).
          Context &mdash; not product name &mdash; determines the code.
        </p>
      </div>

      {/* Resources */}
      <div>
        <h3 className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-4">
          Resources
        </h3>
        <div className="space-y-2">
          <a
            href="/playbook"
            className="flex items-center gap-3 bg-balestra-black border border-white/10 rounded-sm px-5 py-3.5 text-sm text-gray-300 hover:border-balestra-red/50 hover:text-white transition-all"
          >
            <ExternalLinkIcon size={15} className="text-gray-500 flex-shrink-0" />
            <div>
              <div className="font-medium">OCS Playbook</div>
              <div className="text-xs text-gray-500 mt-0.5">
                Decision trees, classification scenarios, and the full framework.
              </div>
            </div>
          </a>
          <a
            href="/guide"
            className="flex items-center gap-3 bg-balestra-black border border-white/10 rounded-sm px-5 py-3.5 text-sm text-gray-300 hover:border-balestra-red/50 hover:text-white transition-all"
          >
            <ExternalLinkIcon size={15} className="text-gray-500 flex-shrink-0" />
            <div>
              <div className="font-medium">User Guide</div>
              <div className="text-xs text-gray-500 mt-0.5">
                Classification principles, implementation guidelines, and governance.
              </div>
            </div>
          </a>
          <a
            href="https://docs.google.com/spreadsheets/d/1Fa4gWqRxzfVXxF5Mcgri3hGhiRh8fPYv/export?format=xlsx"
            className="flex items-center gap-3 bg-balestra-black border border-white/10 rounded-sm px-5 py-3.5 text-sm text-gray-300 hover:border-balestra-red/50 hover:text-white transition-all"
          >
            <DownloadIcon size={15} className="text-gray-500 flex-shrink-0" />
            <div>
              <div className="font-medium">Download Taxonomy (XLSX)</div>
              <div className="text-xs text-gray-500 mt-0.5">
                Full taxonomy spreadsheet &mdash; all {l1Count} categories, {l2Count} classes, and {l3Count}+ detail codes.
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* Contribute CTA */}
      <div className="bg-balestra-black border border-white/10 rounded-sm p-6 text-center">
        <div className="flex justify-center mb-3">
          <div className="w-10 h-10 rounded-full bg-balestra-red/10 flex items-center justify-center">
            <MailIcon size={18} className="text-balestra-red" />
          </div>
        </div>
        <h3 className="font-serif text-lg font-semibold text-white mb-2">
          Want to contribute?
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed mb-4 max-w-md mx-auto">
          OCS v0.99 is a pre-release for community review. We welcome feedback
          on classification principles, edge cases, and industry-specific needs.
        </p>
        <a
          href="mailto:ocs@balestra.group"
          className="inline-flex items-center gap-2 bg-balestra-red text-white font-medium text-sm rounded-sm px-6 py-2.5 hover:bg-white hover:text-balestra-black transition-all"
        >
          <MailIcon size={14} />
          ocs@balestra.group
        </a>
      </div>

      {/* Footer note */}
      <div className="text-center text-xs text-gray-500 pb-4">
        Open Category Standard&trade; &middot; &copy; 2026 Balestra Group &middot; CC BY 4.0
      </div>
    </div>
  )
}
