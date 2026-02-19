export function htmlShell(title: string, content: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title} — Open Category Standard | Balestra Group</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,400;0,600;1,400;1,600&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; }
    body {
      background: #1A1A1A;
      color: #d1d5db;
      font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
      font-size: 15px;
      line-height: 1.7;
      -webkit-font-smoothing: antialiased;
    }
    ::selection { background: #E63946; color: white; }
    h1, h2, h3, .serif { font-family: 'Crimson Pro', ui-serif, Georgia, serif; }
    a { color: #E63946; text-decoration: none; }
    a:hover { color: #fff; }

    .top-bar {
      position: sticky; top: 0; z-index: 50;
      background: rgba(0,0,0,0.95);
      backdrop-filter: blur(8px);
      border-bottom: 1px solid rgba(255,255,255,0.1);
      padding: 14px 24px;
      display: flex; align-items: center; justify-content: space-between;
    }
    .top-bar .logo { font-family: 'Crimson Pro', serif; font-size: 16px; font-weight: 600; color: #fff; }
    .top-bar nav { display: flex; gap: 20px; font-size: 13px; }
    .top-bar nav a { color: #9ca3af; }
    .top-bar nav a:hover { color: #E63946; }

    .container { max-width: 740px; margin: 0 auto; padding: 48px 24px 80px; }
    .accent-line { width: 96px; height: 4px; background: #E63946; margin-bottom: 32px; border-radius: 2px; }

    .download-row {
      display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 40px;
    }
    .dl-btn {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 10px 20px;
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 2px;
      color: #d1d5db;
      font-size: 13px;
      font-weight: 500;
      transition: all 0.15s;
    }
    .dl-btn:hover {
      border-color: #E63946;
      background: rgba(230,57,70,0.08);
      color: #fff;
    }
    .dl-btn svg { width: 16px; height: 16px; }

    .prose { color: #d1d5db; }
    .prose h1 {
      font-size: 2rem; font-weight: 600; color: #fff;
      margin-bottom: 8px; line-height: 1.3;
    }
    .prose h2 {
      font-size: 1.35rem; font-weight: 600; color: #fff;
      margin-top: 40px; margin-bottom: 12px;
      padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.05);
    }
    .prose h3 {
      font-size: 1.05rem; font-weight: 600; color: #e5e7eb;
      margin-top: 28px; margin-bottom: 8px;
    }
    .prose p { margin-bottom: 14px; }
    .prose ul, .prose ol { margin-bottom: 14px; padding-left: 24px; }
    .prose li { margin-bottom: 6px; }
    .prose strong { color: #fff; font-weight: 600; }
    .prose blockquote {
      border-left: 3px solid rgba(230,57,70,0.4);
      padding: 12px 20px;
      margin: 16px 0;
      background: rgba(230,57,70,0.05);
      color: #e5e7eb;
    }
    .prose .callout {
      background: rgba(230,57,70,0.08);
      border: 1px solid rgba(230,57,70,0.2);
      border-radius: 4px;
      padding: 16px 20px;
      margin: 20px 0;
    }
    .prose code {
      font-family: 'SF Mono', 'Fira Code', monospace;
      font-size: 0.85em;
      background: rgba(255,255,255,0.05);
      padding: 2px 6px;
      border-radius: 3px;
    }

    @media (max-width: 640px) {
      .container { padding: 32px 16px 64px; }
      .prose h1 { font-size: 1.5rem; }
      .prose h2 { font-size: 1.15rem; }
    }
  </style>
</head>
<body>
  <div class="top-bar">
    <a href="/" class="logo">OCS Explorer</a>
    <nav>
      <a href="/">Taxonomy</a>
      <a href="/playbook">Playbook</a>
      <a href="/guide">User Guide</a>
    </nav>
  </div>
  <div class="container">
    ${content}
  </div>
</body>
</html>`
}

export const downloadIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></svg>`
