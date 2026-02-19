import type { TabId, TaxonomyVersion } from '../types/taxonomy'
import {
  HomeIcon,
  SearchIcon,
  FolderIcon,
  WandIcon,
  BookIcon,
  LayersIcon,
  DownloadIcon,
  ExternalLinkIcon,
} from './Icons'

const NAV_ITEMS: { id: TabId; label: string; icon: React.ReactNode }[] = [
  { id: 'home', label: 'Home', icon: <HomeIcon size={15} /> },
  { id: 'search', label: 'Search', icon: <SearchIcon size={15} /> },
  { id: 'browse', label: 'Browse', icon: <FolderIcon size={15} /> },
  { id: 'classify', label: 'Classify', icon: <WandIcon size={15} /> },
  { id: 'guide', label: 'Guide', icon: <BookIcon size={15} /> },
]

interface SidebarProps {
  activeTab: TabId
  onTabChange: (tab: TabId) => void
  version?: TaxonomyVersion | null
}

export function Sidebar({ activeTab, onTabChange, version }: SidebarProps) {
  return (
    <aside className="hidden md:flex w-60 bg-black/95 border-r border-white/10 flex-col flex-shrink-0">
      {/* Logo */}
      <div className="px-5 pt-7 pb-5 border-b border-white/7">
        <div className="flex items-center gap-2.5 mb-1">
          <div className="bg-balestra-red rounded p-1.5 flex">
            <LayersIcon size={14} className="text-white" />
          </div>
          <span className="font-serif text-lg font-semibold text-white">
            OCS Explorer
          </span>
        </div>
        {version && (
          <span className="font-mono text-[11px] text-white/40 tracking-wide">
            v{version.number} — {version.status}
          </span>
        )}
      </div>

      {/* Navigation */}
      <nav className="px-3 pt-4 flex-1">
        <div className="text-[10px] uppercase tracking-widest text-white/20 font-semibold px-2 pb-2">
          Navigate
        </div>
        {NAV_ITEMS.map((n) => (
          <button
            key={n.id}
            onClick={() => onTabChange(n.id)}
            className={`flex items-center gap-2.5 w-full px-3 py-2.5 rounded text-sm text-left transition-all mb-0.5 ${
              activeTab === n.id
                ? 'bg-balestra-red/10 text-white font-medium border-l-2 border-balestra-red -ml-px'
                : 'text-gray-300 hover:text-white hover:bg-white/5'
            }`}
          >
            {n.icon}
            {n.label}
          </button>
        ))}
      </nav>

      {/* External links */}
      <div className="px-3 pb-2">
        <div className="text-[10px] uppercase tracking-widest text-white/20 font-semibold px-2 pb-2">
          Resources
        </div>
        <a
          href="/playbook"
          className="flex items-center gap-2.5 w-full px-3 py-2 rounded text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-all"
        >
          <ExternalLinkIcon size={14} />
          Playbook
        </a>
        <a
          href="/guide"
          className="flex items-center gap-2.5 w-full px-3 py-2 rounded text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-all"
        >
          <ExternalLinkIcon size={14} />
          User Guide
        </a>
        <a
          href="https://docs.google.com/spreadsheets/d/1Fa4gWqRxzfVXxF5Mcgri3hGhiRh8fPYv/export?format=xlsx"
          className="flex items-center gap-2.5 w-full px-3 py-2 rounded text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-all"
        >
          <DownloadIcon size={14} />
          Download XLSX
        </a>
      </div>

      {/* Footer */}
      <div className="px-5 py-4 border-t border-white/7 text-[11px] text-white/30 leading-relaxed">
        <div>Open Category Standard&trade;</div>
        <div>&copy; 2026 Balestra Group</div>
        <div>CC BY 4.0</div>
      </div>
    </aside>
  )
}
