-- OCS Taxonomy Database Schema
-- Version: 0001_initial

-- Version control for taxonomy releases
CREATE TABLE IF NOT EXISTS taxonomy_versions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  version_number TEXT NOT NULL,
  version_type TEXT NOT NULL DEFAULT 'general',
  status TEXT NOT NULL DEFAULT 'active',
  is_latest INTEGER NOT NULL DEFAULT 0,
  release_date TEXT,
  description TEXT,
  release_notes TEXT,
  created_at TEXT DEFAULT (datetime('now'))
);

-- Taxonomy items (L1, L2, L3 hierarchy)
CREATE TABLE IF NOT EXISTS taxonomy_items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  version_id INTEGER NOT NULL REFERENCES taxonomy_versions(id),
  code TEXT NOT NULL,
  level INTEGER NOT NULL CHECK (level IN (1, 2, 3)),
  parent_code TEXT,
  name TEXT NOT NULL,
  description TEXT,
  keywords TEXT,
  examples TEXT,
  supply_market_characteristics TEXT,
  strategy_guidance TEXT,
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TEXT DEFAULT (datetime('now')),
  UNIQUE(version_id, code)
);

CREATE INDEX IF NOT EXISTS idx_items_version ON taxonomy_items(version_id);
CREATE INDEX IF NOT EXISTS idx_items_level ON taxonomy_items(level);
CREATE INDEX IF NOT EXISTS idx_items_parent ON taxonomy_items(parent_code);
CREATE INDEX IF NOT EXISTS idx_items_code ON taxonomy_items(code);
