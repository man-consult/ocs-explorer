/**
 * Seed script: reads the OCS Taxonomy XLSX and generates a SQL file for D1.
 *
 * Usage:
 *   pnpm seed
 *   # Then apply:
 *   pnpm seed:local   # or seed:remote
 */
import { readFileSync, writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { read, utils } from 'xlsx'

const __dirname = dirname(fileURLToPath(import.meta.url))

const XLSX_PATH =
  process.argv[2] ||
  resolve(
    process.env.HOME!,
    'Downloads',
    'OCS Taxonomy List V0.99 (1).xlsx',
  )

function escapeSQL(val: unknown): string {
  if (val === null || val === undefined || val === '') return 'NULL'
  const s = String(val).replace(/'/g, "''")
  return `'${s}'`
}

function main() {
  console.log(`Reading: ${XLSX_PATH}`)
  const buf = readFileSync(XLSX_PATH)
  const wb = read(buf)

  // --- Parse metadata sheet ---
  const metaSheet = wb.Sheets['metadata']
  if (!metaSheet) throw new Error("Sheet 'metadata' not found")
  const metaRows = utils.sheet_to_json<Record<string, unknown>>(metaSheet)
  const meta = metaRows[0]!

  const versionNumber = String(meta['version_number'] ?? '0.99')
  const versionType = String(meta['version_type'] ?? 'general')
  const status = String(meta['status'] ?? 'active')
  let releaseDate: string | null = null
  if (meta['release_date'] instanceof Date) {
    releaseDate = meta['release_date'].toISOString().split('T')[0]
  } else if (meta['release_date'] && typeof meta['release_date'] === 'number') {
    // Excel serial date number — convert to ISO date
    const excelEpoch = new Date(1899, 11, 30)
    const d = new Date(excelEpoch.getTime() + (meta['release_date'] as number) * 86400000)
    releaseDate = d.toISOString().split('T')[0]
  } else if (meta['release_date']) {
    releaseDate = String(meta['release_date'])
  }
  const description = meta['description'] ? String(meta['description']) : null
  const releaseNotes = meta['release_notes']
    ? String(meta['release_notes'])
    : null

  // --- Parse items sheet ---
  const itemsSheet = wb.Sheets['items']
  if (!itemsSheet) throw new Error("Sheet 'items' not found")
  const itemRows = utils.sheet_to_json<Record<string, unknown>>(itemsSheet)

  console.log(`Found ${itemRows.length} taxonomy items`)

  // --- Generate SQL ---
  const lines: string[] = []

  lines.push('-- Auto-generated seed data from OCS Taxonomy XLSX')
  lines.push(`-- Generated: ${new Date().toISOString()}`)
  lines.push('')

  // Clear existing data (idempotent re-seed)
  lines.push('DELETE FROM taxonomy_items;')
  lines.push('DELETE FROM taxonomy_versions;')
  lines.push('')

  // Insert version
  lines.push(
    `INSERT INTO taxonomy_versions (version_number, version_type, status, is_latest, release_date, description, release_notes)` +
      ` VALUES (${escapeSQL(versionNumber)}, ${escapeSQL(versionType)}, ${escapeSQL(status)}, 1, ${escapeSQL(releaseDate)}, ${escapeSQL(description)}, ${escapeSQL(releaseNotes)});`,
  )
  lines.push('')

  // Insert items (version_id = 1 since we just inserted it)
  for (const row of itemRows) {
    const code = String(row['Code'] ?? '')
    if (!code) continue

    // Convert level from string "01"/"02"/"03" to integer
    const rawLevel = String(row['level'] ?? '')
    const level = parseInt(rawLevel, 10)
    if (isNaN(level) || level < 1 || level > 3) {
      console.warn(`Skipping row with invalid level: ${rawLevel} (code: ${code})`)
      continue
    }

    const parentCode = row['parent_code'] ? String(row['parent_code']) : null
    const name = String(row['name'] ?? '')
    const description = row['description'] ? String(row['description']) : null
    const keywords = row['keywords'] ? String(row['keywords']) : null
    const examples = row['examples'] ? String(row['examples']) : null
    const supplyMarket = row['supply_market_characteristics']
      ? String(row['supply_market_characteristics'])
      : null
    const strategyGuidance = row['strategy_guidance']
      ? String(row['strategy_guidance'])
      : null
    const displayOrder = parseInt(String(row['display_order'] ?? '0'), 10) || 0

    // Derive ESG risk from L1 code prefix
    const l1Prefix = code.substring(0, 2)
    const HIGH_RISK = ['01', '03', '06', '12', '15']
    const MEDIUM_RISK = ['02', '05', '08', '11', '13']
    const LOW_RISK = ['04', '07', '09', '10', '14']
    const esgRisk = HIGH_RISK.includes(l1Prefix)
      ? 'high'
      : MEDIUM_RISK.includes(l1Prefix)
        ? 'medium'
        : LOW_RISK.includes(l1Prefix)
          ? 'low'
          : null

    lines.push(
      `INSERT INTO taxonomy_items (version_id, code, level, parent_code, name, description, keywords, examples, supply_market_characteristics, strategy_guidance, display_order, esg_risk)` +
        ` VALUES (1, ${escapeSQL(code)}, ${level}, ${escapeSQL(parentCode)}, ${escapeSQL(name)}, ${escapeSQL(description)}, ${escapeSQL(keywords)}, ${escapeSQL(examples)}, ${escapeSQL(supplyMarket)}, ${escapeSQL(strategyGuidance)}, ${displayOrder}, ${escapeSQL(esgRisk)});`,
    )
  }

  const outputPath = resolve(__dirname, 'seed-data.sql')
  writeFileSync(outputPath, lines.join('\n'), 'utf-8')
  console.log(`Wrote ${lines.length} lines to ${outputPath}`)
}

main()
