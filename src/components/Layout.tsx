import { useState } from 'react'
import type { TabId, TaxonomyVersion } from '../types/taxonomy'
import { Sidebar } from './Sidebar'
import {
  HomeIcon,
  SearchIcon,
  FolderIcon,
  WandIcon,
  BookIcon,
  LayersIcon,
  MenuIcon,
  CloseIcon,
} from './Icons'

const TAB_HEADERS: Record<TabId, { title: string; subtitle: string }> = {
  home: {
    title: 'Open Category Standard',
    subtitle:
      'A taxonomy built for procurement and category management.',
  },
  search: {
    title: 'Search the Taxonomy',
    subtitle:
      'Find a Level 3 classification by keyword, item name, or example.',
  },
  browse: {
    title: 'Browse Hierarchy',
    subtitle:
      'Explore the full 15-category structure from Level 1 through Level 3.',
  },
  classify: {
    title: 'Classification Wizard',
    subtitle: 'Answer a few questions to identify the right classification.',
  },
  guide: {
    title: 'Core Principles',
    subtitle:
      'The Golden Rule, Three-Test Framework, and classification principles.',
  },
}

const MOBILE_NAV: { id: TabId; icon: React.ReactNode }[] = [
  { id: 'home', icon: <HomeIcon size={18} /> },
  { id: 'search', icon: <SearchIcon size={18} /> },
  { id: 'browse', icon: <FolderIcon size={18} /> },
  { id: 'classify', icon: <WandIcon size={18} /> },
  { id: 'guide', icon: <BookIcon size={18} /> },
]

interface LayoutProps {
  activeTab: TabId
  onTabChange: (tab: TabId) => void
  version?: TaxonomyVersion | null
  children: React.ReactNode
}

export function Layout({
  activeTab,
  onTabChange,
  version,
  children,
}: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const header = TAB_HEADERS[activeTab]

  return (
    <div className="flex h-dvh overflow-hidden bg-balestra-black selection:bg-balestra-red selection:text-white">
      {/* Desktop sidebar */}
      <Sidebar
        activeTab={activeTab}
        onTabChange={onTabChange}
        version={version}
      />

      {/* Mobile header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-white/10">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="bg-balestra-red rounded p-1 flex">
              <LayersIcon size={12} className="text-white" />
            </div>
            <span className="font-serif text-sm font-semibold text-white">
              OCS Explorer
            </span>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-400 hover:text-white p-1"
          >
            {mobileMenuOpen ? (
              <CloseIcon size={20} />
            ) : (
              <MenuIcon size={20} />
            )}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="border-t border-white/10 px-4 py-3 space-y-1 anim-fade">
            {MOBILE_NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => {
                  onTabChange(n.id)
                  setMobileMenuOpen(false)
                }}
                className={`flex items-center gap-3 w-full px-3 py-2.5 rounded text-sm transition-all ${
                  activeTab === n.id
                    ? 'bg-balestra-red/10 text-white font-medium'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {n.icon}
                {TAB_HEADERS[n.id].title}
              </button>
            ))}
            <div className="border-t border-white/10 pt-2 mt-2 flex gap-4">
              <a
                href="/playbook"
                className="text-xs text-gray-400 hover:text-gray-200"
              >
                Playbook
              </a>
              <a
                href="/guide"
                className="text-xs text-gray-400 hover:text-gray-200"
              >
                User Guide
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden pt-[52px] md:pt-0">
        {/* Page header */}
        <div className="bg-balestra-black border-b border-white/10 px-6 md:px-9 py-5 flex-shrink-0">
          <h1 className="text-xl md:text-[22px] font-serif font-semibold text-white">
            {header.title}
          </h1>
          <p className="text-[13px] text-gray-400 mt-0.5">{header.subtitle}</p>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-6 md:px-9 py-8">
          {children}
        </div>
      </div>

      {/* Mobile bottom tab bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-t border-white/10">
        <div className="flex">
          {MOBILE_NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => onTabChange(n.id)}
              className={`flex-1 flex flex-col items-center gap-1 py-2.5 text-[10px] transition-colors ${
                activeTab === n.id
                  ? 'text-balestra-red'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              {n.icon}
              {TAB_HEADERS[n.id].title.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
