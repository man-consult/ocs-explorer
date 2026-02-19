import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { taxonomyRoutes } from './api/taxonomy'
import { renderPlaybook } from './pages/playbook'
import { renderUserGuide } from './pages/user-guide'

type Bindings = {
  OCS_DB: D1Database
  ASSETS: Fetcher
}

const app = new Hono<{ Bindings: Bindings }>()

// CORS for API routes
app.use('/api/*', cors())

// API routes
app.route('/api/taxonomy', taxonomyRoutes)

// Server-rendered pages
app.get('/playbook', (c) => c.html(renderPlaybook()))
app.get('/guide', (c) => c.html(renderUserGuide()))

export default app
