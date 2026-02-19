import { Hono } from 'hono'

type Bindings = { OCS_DB: D1Database }

const app = new Hono<{ Bindings: Bindings }>()

// GET / — Full taxonomy for latest version
app.get('/', async (c) => {
  const db = c.env.OCS_DB

  const version = await db
    .prepare('SELECT * FROM taxonomy_versions WHERE is_latest = 1 LIMIT 1')
    .first()

  if (!version) return c.json({ error: 'No taxonomy version found' }, 404)

  const { results: items } = await db
    .prepare(
      'SELECT id, code, level, parent_code, name, description, keywords, examples, supply_market_characteristics, strategy_guidance, display_order FROM taxonomy_items WHERE version_id = ? ORDER BY code',
    )
    .bind(version.id)
    .all()

  const l1 = items.filter((i: Record<string, unknown>) => i.level === 1)
  const l2 = items.filter((i: Record<string, unknown>) => i.level === 2)
  const l3 = items.filter((i: Record<string, unknown>) => i.level === 3)

  c.header('Cache-Control', 'public, max-age=3600, s-maxage=86400')

  return c.json({
    version: {
      number: version.version_number,
      type: version.version_type,
      status: version.status,
      releaseDate: version.release_date,
      description: version.description,
    },
    taxonomy: { l1, l2, l3 },
    totalItems: items.length,
  })
})

// GET /version — Version metadata only
app.get('/version', async (c) => {
  const db = c.env.OCS_DB
  const version = await db
    .prepare('SELECT * FROM taxonomy_versions WHERE is_latest = 1 LIMIT 1')
    .first()

  if (!version) return c.json({ error: 'No version found' }, 404)
  return c.json(version)
})

// GET /search?q= — FTS5 search
app.get('/search', async (c) => {
  const query = c.req.query('q')
  if (!query || query.length < 2) {
    return c.json({ results: [] })
  }

  const db = c.env.OCS_DB

  // Use LIKE search since FTS5 might not be available in all D1 environments
  const searchTerm = `%${query}%`
  const { results } = await db
    .prepare(
      `SELECT id, code, level, parent_code, name, description, keywords, examples, supply_market_characteristics, strategy_guidance, display_order
       FROM taxonomy_items
       WHERE version_id = (SELECT id FROM taxonomy_versions WHERE is_latest = 1 LIMIT 1)
         AND (name LIKE ?1 OR keywords LIKE ?1 OR examples LIKE ?1 OR description LIKE ?1 OR code LIKE ?1)
       ORDER BY level, code
       LIMIT 50`,
    )
    .bind(searchTerm)
    .all()

  return c.json({ results })
})

export { app as taxonomyRoutes }
