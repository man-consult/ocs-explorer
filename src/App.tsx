import { useState, useEffect } from 'react'
import { Layout } from './components/Layout'
import { SearchTab } from './components/SearchTab'
import { BrowseTab } from './components/BrowseTab'
import { WizardTab } from './components/WizardTab'
import { GuideTab } from './components/GuideTab'
import { useTaxonomy } from './hooks/useTaxonomy'
import type { TabId } from './types/taxonomy'

function LoadingSkeleton() {
  return (
    <div className="max-w-2xl space-y-4 animate-pulse">
      <div className="h-12 bg-white/5 rounded-sm" />
      <div className="h-24 bg-white/5 rounded-sm" />
      <div className="h-24 bg-white/5 rounded-sm" />
      <div className="h-24 bg-white/5 rounded-sm" />
    </div>
  )
}

function ErrorState({ message }: { message: string }) {
  return (
    <div className="max-w-md mx-auto text-center py-16">
      <div className="text-4xl text-gray-600 mb-4">!</div>
      <h2 className="font-serif text-xl text-white mb-2">
        Failed to load taxonomy
      </h2>
      <p className="text-sm text-gray-500 mb-4">{message}</p>
      <button
        onClick={() => window.location.reload()}
        className="text-sm text-balestra-red hover:text-white transition-colors"
      >
        Try again
      </button>
    </div>
  )
}

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('search')
  const { data, loading, error } = useTaxonomy()

  // Sync tab with URL hash
  useEffect(() => {
    const hash = window.location.hash.slice(1) as TabId
    if (['search', 'browse', 'classify', 'guide'].includes(hash)) {
      setActiveTab(hash)
    }
  }, [])

  const handleTabChange = (tab: TabId) => {
    setActiveTab(tab)
    window.location.hash = tab
  }

  return (
    <Layout
      activeTab={activeTab}
      onTabChange={handleTabChange}
      version={data?.version}
    >
      {loading && <LoadingSkeleton />}
      {error && <ErrorState message={error} />}
      {data && (
        <>
          {activeTab === 'search' && <SearchTab taxonomy={data} />}
          {activeTab === 'browse' && <BrowseTab taxonomy={data} />}
          {activeTab === 'classify' && <WizardTab taxonomy={data} />}
          {activeTab === 'guide' && <GuideTab />}
        </>
      )}
    </Layout>
  )
}
